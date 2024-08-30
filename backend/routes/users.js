import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  addRemoveFriend,
  getUser,
  getUserFriend,
} from "../controller/users.js";
export const userRouter = express.Router();

userRouter.get("/:id", verifyToken, getUser);
userRouter.get("/:id/friends", getUserFriend);
userRouter.patch("/:id/:friendId", addRemoveFriend);
