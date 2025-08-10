import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.c9rczc7.mongodb.net/whatsAppClone`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("not connected: ", error.message);
  }
};

export default Connection;
