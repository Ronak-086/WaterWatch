import e from "express";
import { addWaterReadings, deleteWaterReadings, getWaterReadings, updateWaterReadings } from "../controllers/waterReading.controller.js";
export const waterReadingRouter=e.Router();
waterReadingRouter.get('/getWaterReadings',getWaterReadings);
waterReadingRouter.post('/addWaterReadings',addWaterReadings);
waterReadingRouter.put('/updateWaterReadings/:id',updateWaterReadings);
waterReadingRouter.delete('/deleteWaterReadings/:id',deleteWaterReadings);