import { Router } from "express";
import { getAllUsers, loginUser, registerUser } from "../controllers/userController.js";

export const userRouter = new Router();

userRouter.get('/', getAllUsers)
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)