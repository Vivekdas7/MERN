import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongodb connection!! DB HOST : ${
            connectionInstance.Connection.host
        }`)

    }
    catch(error){
        console.log("MonGodb Connection Error...",error)

    }
}
export default connectDB