import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

import cors from  'cors'
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json())
const port = process.env.PORT || 3000
const uri = process.env.MONGO_DB_URL

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log(port);
  
})
app.post("/signUp", (req, res) => {
  console.log(req.body);
  res.send("SignUp Successful");
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


console.log("this")