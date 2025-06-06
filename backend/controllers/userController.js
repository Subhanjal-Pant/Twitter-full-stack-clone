import {User} from "../models/userSchema.js";
import bcrypt from "bcryptjs";
export const Register = async (req, res) => {
  try {
    const { email, password, name, username } = req.body;
    if (!name || !email || !password || !username) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already Exists.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let createdUser = await User.create({
      email,
      password: hashedPassword,
      name,
      username,
    });
    console.log(createdUser);

    return res.status(201).json({
      message: "Account Created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
