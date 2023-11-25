import { connect, connection } from "mongoose";

async function connectToDatabase() {
  try {
    const isConnected = connection.readyState === 1;

    if (isConnected) {
      console.log("Connected");
    }

    await connect(process.env.DATABASE_URL as string);

    console.log("connected to database!");
  } catch (error) {
    console.log(error);
  }
}

export default connectToDatabase;
