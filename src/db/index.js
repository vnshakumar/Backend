import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_Name}`);
        console.log(`\n Mongoose connected !! DB HOSt : ${connectionInstance.connection.host}`);


    } catch (error) {
        console.log("DB connection error: ", error);
        process.exit(1);
    }
}
export default connectDB