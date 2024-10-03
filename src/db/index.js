import mongoose from "mongoose";
import { db_name} from "../constants.js";

const connectDb = async ()=>{
    try {
         const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
         console.log(`\n MongoDB connected DB:host ${connectioninstance.connection.host}`);
    } catch (error) {
        console.log("Mongo Db connection error",error);
        process.exit(1);
    }
}


export default connectDb;