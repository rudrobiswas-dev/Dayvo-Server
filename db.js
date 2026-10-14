import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is missing. Copy .env.example to .env and configure it.");

const client = new MongoClient(uri);
export const db = client.db(process.env.MONGODB_DB_NAME || "dayvo");

export async function connectDatabase() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log("✅ MongoDB connected successfully");
}
