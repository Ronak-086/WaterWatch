import e from "express";
import { addRecommandations, getRecommandations } from "../controllers/recommandations.controller.js";
export const recommandationsRouter=e.Router();
recommandationsRouter.get('/getRecommandations/:id',getRecommandations);
recommandationsRouter.put('/addRecommandations',addRecommandations);