const mongoose = require("mongoose");

const MONGO_URI = "mongodb://dashboard-mongodb:27017/dashboard";

export async function connectToMongoDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}