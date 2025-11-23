import { MongoClient } from 'mongodb';

const dbName = process.env.MONGODB_DB_NAME || 'Portfolio_Website';

let client;
let clientPromise;

// Lazy connection - only connect when needed
function getClientPromise() {
  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    if (!clientPromise) {
      client = new MongoClient(uri);
      clientPromise = client.connect();
    }
    return clientPromise;
  }
}

// Helper function to get the database
export async function getDatabase() {
  const clientPromise = getClientPromise();
  const client = await clientPromise;
  return client.db(dbName);
}

// Helper function to get the contacts collection
export async function getContactsCollection() {
  const db = await getDatabase();
  return db.collection('contacts');
}

