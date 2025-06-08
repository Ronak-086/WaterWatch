import mongoose from "mongoose";

const environmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Environment name is required"],
    trim: true,
    minlength: [3, "Environment name must be at least 3 characters"],
    maxlength: [50, "Environment name must be less than 50 characters"]
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    trim: true,
    maxlength: [100, "Location name must be less than 100 characters"]
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Environment must belong to a user"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  waterReadings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WaterReading"
    }
  ],
  recommandations:{
    type:[String]
  }
});

export const Environment = mongoose.model("Environment", environmentSchema);