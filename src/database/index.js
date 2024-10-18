import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connetDB = async () => {
  try {
    const connectionInstant = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n Mongodb connected !! DB HOST : ${connectionInstant.connection.host}`);
    

  } catch (error) {
    console.log("MONGODB connection Erorr !!!");
    process.exit(1);
    
  }
}

export default connetDB;