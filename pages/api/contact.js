import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import clientPromise from '../../lib/mongodb';  // ✅ Correct path

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ message: 'Unauthorized. Please sign in first.' });
    }

    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const client = await clientPromise;
    const db = client.db('Portfolio_Website');
    const contactsCollection = db.collection('contacts');

    const contactData = {
      sessionEmail: session.user.email,
      formName: name,
      formEmail: email,
      formPhone: phone,
      message: message,
      createdAt: new Date(),
      userId: session.user.id,
    };

    const result = await contactsCollection.insertOne(contactData);

    if (result.insertedId) {
      return res.status(200).json({
        message: 'Thank you for your message! We\'ll get back to you soon.',
        messageId: result.insertedId,
      });
    } else {
      return res.status(500).json({ message: 'Error saving message.' });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Error processing your message. Please try again.' });
  }
}