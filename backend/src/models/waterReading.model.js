import mongoose from "mongoose";

const waterReadingSchema = new mongoose.Schema({
  environment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Environment",
    required: [true, "Water reading must be linked to an environment"]
  },
  ph: {
    type: Number,
    required: [true, "pH value is required"],
    min: [0, "pH must be at least 0"],
    max: [14, "pH must be less than or equal to 14"]
  },
  Hardness: {
    type: Number,
    required: [true, "Hardness is required"],
    min: [0, "Hardness must be non-negative"]
  },
  Solids: {
    type: Number,
    required: [true, "Solids value is required"],
    min: [0, "Solids must be non-negative"]
  },
  Chloramines: {
    type: Number,
    required: [true, "Chloramines value is required"],
    min: [0, "Chloramines must be non-negative"]
  },
  Sulfate: {
    type: Number,
    required: [true, "Sulfate value is required"],
    min: [0, "Sulfate must be non-negative"]
  },
  Conductivity: {
    type: Number,
    required: [true, "Conductivity is required"],
    min: [0, "Conductivity must be non-negative"]
  },
  Organic_carbon: {
    type: Number,
    required: [true, "Organic carbon is required"],
    min: [0, "Organic carbon must be non-negative"]
  },
  Trihalomethanes: {
    type: Number,
    required: [true, "Trihalomethanes value is required"],
    min: [0, "Trihalomethanes must be non-negative"]
  },
  Turbidity: {
    type: Number,
    required: [true, "Turbidity value is required"],
    min: [0, "Turbidity must be non-negative"]
  },
  prediction: {
    type: Boolean,
    required: [true, "Prediction result is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const WaterReading = mongoose.model("WaterReading", waterReadingSchema);