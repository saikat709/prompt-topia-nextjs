import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    console.log('MongoDB is trying to be connected');
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "promptopia",
      // password: process.env.MONGODB_PASSWORD,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log("Error while connecting: ", error);
  }
}