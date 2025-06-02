import express from 'express';
import dotenv from "dotenv";

const app = express()
dotenv.config({
    path: ".env"
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})