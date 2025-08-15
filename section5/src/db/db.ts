import mongoose from "mongoose";
const db_uri: any = process.env.DB_URI

export const ConnectDb = async () => {
  try {
    await mongoose.connect(db_uri)
    console.log("✅ MongoDB connection successful....")
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}