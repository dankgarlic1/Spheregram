import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getUser } from "../controller/users.js";
export const userRouter = express.Router();

userRouter.get("/:id", verifyToken, getUser);
