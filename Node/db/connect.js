const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const connectToDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
    return client.db("E-Com");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    return null;
  }
};

const getCollection = async (collectionName) => {
  const db = await connectToDB();
  if (!db) {
    throw new Error("Failed to connect to the database.");
  }
  return db.collection(collectionName);
};

module.exports = { connectToDB, getCollection };
