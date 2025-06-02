import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

const databaseConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to mongoDB");

    }).catch((error)=>{
        console.log(error);
    })
}


export default databaseConnection;