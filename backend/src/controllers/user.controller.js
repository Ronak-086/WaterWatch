import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken"
export const RegisterUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "email required to register.",
      });
    }
    if (!password) {
      return res.status(400).json({
        success: false,
        message: "password required to register.",
      });
    }
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "name required to register.",
      });
    }
    const user =await User.findOne({ email });
    if (user) {
      return res.status(403).json({
        success: false,
        message: "email already registered.",
      });
    }
    const newUser = await User.create({ email, password, name });
    if (!newUser) {
      return res.status(403).json({
        success: false,
        message: "something went wrong.",
      });
    }
    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isVerified: newUser.isVerified,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const loginUser = async (req, res) => {
  try {
    const {email,password}=req.body;
    if(!email || !password){
      return res.status(400).json({
        success:false,
        message:"email or password required."
      })
    }
    const user=await User.findOne({email}).select("+password");
    if(!user){
      return res.status(403).json({
        success:false,
        message:"email not registered."
      })
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(402).json({
        success:false,
        message:"password incorrect."
      })
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
     return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
      },
    });
  } catch (err) {
     return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const verifyUser = async (req, res) => {
  try {
  } catch (err) {}
};
export const changeUserPassword = async (req, res) => {
  try {
  } catch (err) {}
};
export const addUserEnvironment = async (req, res) => {
  try {
    const { userId, environmentId } = req.body;

    if (!userId || !environmentId) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing.",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (user.environments.includes(environmentId)) {
      return res.status(409).json({
        success: false,
        message: "Environment already linked to the user.",
      });
    }

    user.environments.push(environmentId);
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Environment added successfully.",
      environments: user.environments,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const generateUserOtp = async () => {
  try {
  } catch (err) {}
};
