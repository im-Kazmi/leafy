import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    const isConnected = mongoose.connection.readyState === 1;

    if (isConnected) {
      console.log("Connected");
    }

    await mongoose.connect(process.env.DATABASE_URL as string);

    console.log("connected to database!");
  } catch (error) {
    console.log(error);
  }
}

export default connectToDatabase;
