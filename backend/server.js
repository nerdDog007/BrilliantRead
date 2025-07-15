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
console.log(uri)

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },  
  password: {
    type: String,
    required: true,
  }
})
const bookSchema = new mongoose.Schema({
  authors:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  image :{
    type:String,
    required:true
  },
  id:{
    type:String,
    required:true
  },
  subtitle:{
    type: String,
    required: true,
  },
  url:{
    type:String,
    required:true
  }
})


const User = mongoose.model('User', userSchema)
const Book = mongoose.model('Book', bookSchema)


mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

  app.post("/signUp", async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({ name, email, password });
  
      await user.save();
  
      console.log(req.body);
      res.status(201).json({ message: "SignUp Successful" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "SignUp failed" });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


console.log("this")