import e from "express";
import { addUserEnvironment, changeUserPassword, loginUser, RegisterUser, verifyUser } from "../controllers/user.controller.js";
export const userRouter=e.Router();
userRouter.post('/register',RegisterUser);
userRouter.post('/login',loginUser);
userRouter.put('/changePassword',changeUserPassword);
userRouter.put('/verifyEmail',verifyUser);
userRouter.post('/addOtherUserEnvironment/:id',addUserEnvironment);