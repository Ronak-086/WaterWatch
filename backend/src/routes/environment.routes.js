import e from "express";
import { createEnvironment, deleteEnvironment, getEnvironments, updateEnvironment } from "../controllers/environment.controller.js";
export const environmentRouter=e.Router();
environmentRouter.get('/getEnvironments/:id',getEnvironments);
environmentRouter.post('/createEnvironment',createEnvironment);
environmentRouter.post('/deleteEnvironment',deleteEnvironment);
environmentRouter.put('/updateEnvironment/:id',updateEnvironment);