// db.js
import { MongoClient } from 'mongodb';
const url = process.env.MONGO_URL
const mongoclient = new MongoClient(url);

async function connectToDatabase() {
  try {
  const connection =   await mongoclient.connect();
  const db =  connection.db("OPENIN")
  console.log("connected to db")
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    
  }
}

export { connectToDatabase };
