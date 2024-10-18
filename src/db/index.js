import mongoose from 'mongoose'; // Import mongoose at the top
import { DB_NAME } from '../constants.js';  // Ensure correct relative path for constants.js

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
      
    });

    console.log(`MONGO DB connected successfully! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB error", error);
    process.exit(1);
  }
};

export default connectDb;
