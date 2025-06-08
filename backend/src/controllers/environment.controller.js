import { Environment } from "../models/environment.model.js";
import { User } from "../models/user.model.js";

export const createEnvironment = async (req,res) => {
  try {
    const {userId,name,location}=req.body;
    if(!userId || !name || !location){
      return res.status(400).json({
        success:false,
        message:"required fields are missing."
      })
    }
    const user=await User.findById(userId);
    if(!user){
       return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }
    const environment=await Environment.create({user:userId,name,location});
    user.environments.push(environment._id);
    await user.save();
    return res.status(201).json({
      success: true,
      message: "Environment created and linked successfully.",
      environment,
      environments: user.environments,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const updateEnvironment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Environment ID is required.",
      });
    }

    const environment = await Environment.findById(id);
    if (!environment) {
      return res.status(404).json({
        success: false,
        message: "Environment not found.",
      });
    }

    if (name) environment.name = name;
    if (location) environment.location = location;

    await environment.save();

    return res.status(200).json({
      success: true,
      message: "Environment updated successfully.",
      environment,
    });
  } catch (err) {
    console.error("Error in updateEnvironment:", err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const deleteEnvironment = async (req, res) => {
  try {
    const { id } = req.params;
    const {userId}=req.body;
    if(!userId){
      return res.status(400).json({
        success: false,
        message: "user ID is required.",
      });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Environment ID is required.",
      });
    }

    const environment = await Environment.findByIdAndDelete(id);
   user.environments = user.environments.filter(envId => envId.toString() !== id);
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Environment deleted successfully.",
      deletedEnvironment: environment,
      updatedEnvironments: user.environments,
    });
  } catch (err) {
    console.error("Error in updateEnvironment:", err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};