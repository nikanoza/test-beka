import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import mongoose from "mongoose";

if (!process.env.DATABASE_URL || !process.env.DATABASE_PASSWORD) {
  throw new Error(
    "Database URL or Database password is not defined in environment variables!"
  );
}
const DB_URL = process.env.DATABASE_URL?.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

try {
  console.log(DB_URL);
  mongoose.connect(DB_URL);
} catch (error) {
  console.error("Error connecting to database:", error);
}

app.listen(process.env.PORT || 3000);
