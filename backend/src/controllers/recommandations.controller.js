import { Environment } from "../models/environment.model.js";

export const getRecommandations = async (req, res) => {
  try {
    const { id } = req.params;

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

    return res.status(200).json({
      success: true,
      data: environment.recommandations || [],
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const addRecommandations = async (req, res) => {
  try {
    const { environmentId, suggestion } = req.body;

    if (!environmentId || !suggestion) {
      return res.status(400).json({
        success: false,
        message: "Environment ID and suggestion are required.",
      });
    }
    const environment=await Environment.findById(environmentId);
    if(!environment){
      return res.status(404).json({
        success: false,
        message: "Environment not found.",
      });
    }
    environment.recommandations.push(suggestion);
    await environment.save();
    return res.status(201).json({
      success: true,
      message: "Recommendation added successfully.",
      data: environment.recommandations,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
