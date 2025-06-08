import e from "express";
import { createEnvironment, deleteEnvironment, updateEnvironment } from "../controllers/environment.controller.js";
export const environmentRouter=e.Router();
environmentRouter.post('/createEnvironment',createEnvironment);
environmentRouter.post('/deleteEnvironment',deleteEnvironment);
environmentRouter.post('/updateEnvironment/:id',updateEnvironment);