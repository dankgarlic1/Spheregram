import express from "express";
import { login } from "../controller/auth.js";

export const authRouter = express.Router();

authRouter.post("/login", login);
