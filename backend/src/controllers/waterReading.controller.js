import { Environment } from "../models/environment.model.js";
import { WaterReading } from "../models/waterReading.model.js";

export const getWaterReadings = async (req, res) => {
  try {
    const {id}=req.params;
    const readings = await WaterReading.find({environment:id}).populate("environment");
    return res.status(200).json({
      success: true,
      data: readings,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const addWaterReadings = async (req, res) => {
  try {
    const {
      environment,
      ph,
      Hardness,
      Solids,
      Chloramines,
      Sulfate,
      Conductivity,
      Organic_carbon,
      Trihalomethanes,
      Turbidity,
      prediction,
    } = req.body;

    if (
      !environment ||
      ph == null ||
      Hardness == null ||
      Solids == null ||
      Chloramines == null ||
      Sulfate == null ||
      Conductivity == null ||
      Organic_carbon == null ||
      Trihalomethanes == null ||
      Turbidity == null ||
      prediction == null
    ) {
      return res.status(400).json({
        success: false,
        message: "All water reading fields are required.",
      });
    }
    const currEnvironment = await Environment.findById(environment);
    if (!currEnvironment) {
      return res.status(404).json({
        success: false,
        message: "Environment not found",
      });
    }
    const reading = await WaterReading.create({
      environment,
      ph,
      Hardness,
      Solids,
      Chloramines,
      Sulfate,
      Conductivity,
      Organic_carbon,
      Trihalomethanes,
      Turbidity,
      prediction,
    });
    currEnvironment.waterReadings.push(reading._id);
    await currEnvironment.save();
    return res.status(201).json({
      success: true,
      message: "Water reading added successfully.",
      data: reading,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const updateWaterReadings = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updated = await WaterReading.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Water reading not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Water reading updated successfully.",
      data: updated,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const deleteWaterReadings = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await WaterReading.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Water reading not found.",
      });
    }
    await Environment.findByIdAndUpdate(deleted.environment, {
      $pull: { waterReadings: id },
    });
    return res.status(200).json({
      success: true,
      message: "Water reading deleted successfully.",
      data: deleted,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
