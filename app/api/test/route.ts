import mongoose from "mongoose";
import { connectToMongoDB } from "../db";
import { NextApiRequest, NextApiResponse} from "next";

connectToMongoDB();

// const client = mongoose.connection;

export async function GET() {
  // Use the client to interact with the MongoDB database

  const data = { message: "Connected to MongoDB"};

  return Response.json({ data });
}

   