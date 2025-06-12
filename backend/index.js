import express from 'express';
import dotenv from "dotenv";
import databaseConnection from './config/database.js';
import cookieParser  from 'cookie-parser';
import userRoute from "./routes/userRoute.js"


dotenv.config({
    path: ".env"
})
const app = express()

app.use(express.urlencoded({
  extended:true
}));

app.use(express.json());
app.use(cookieParser());


databaseConnection();

// APIs

app.use("/api/v1/user/", userRoute)

app.get("/home", (req,res)=>{
  res.status(200).json({
    message: "Coming from backend"
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})