import User from '../models/User.js';

export const signUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "SignUp Successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "SignUp failed" });
  }
};