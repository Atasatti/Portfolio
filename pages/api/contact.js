import { getContactsCollection } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        status: 'error',
        message: 'All fields are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide a valid email address'
      });
    }

    // Get the contacts collection
    const contactsCollection = await getContactsCollection();

    // Create contact document
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim(),
      createdAt: new Date(),
      status: 'new' // You can use this to track if the message has been read/responded to
    };

    // Insert the contact into the database
    const result = await contactsCollection.insertOne(contactData);

    if (result.insertedId) {
      return res.status(200).json({
        status: 'success',
        message: "Thank you for your message! We'll get back to you soon.",
        data: {
          id: result.insertedId,
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone,
          createdAt: contactData.createdAt
        }
      });
    } else {
      throw new Error('Failed to save contact to database');
    }
  } catch (error) {
    console.error('Error handling contact form:', error);
    
    // Check if it's a MongoDB connection error
    if (error.message && error.message.includes('MONGODB_URI')) {
      return res.status(500).json({
        status: 'error',
        message: 'Database is not configured. Please set up MONGODB_URI in .env.local'
      });
    }
    
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while processing your request. Please try again later.'
    });
  }
}

