import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const mongoURI  = process.env.MONGO_URI as string
  try {
    await mongoose.connect(mongoURI)
    console.log("Database Connected");
  } catch (err :any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
