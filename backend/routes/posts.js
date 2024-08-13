import express from "express";
import {
  createPost,
  getFeedPosts,
  getUserPost,
  likePost,
} from "../controller/posts.js";
import { verifyToken } from "../middleware/auth.js";

export const postRouter = express.Router();

postRouter.post("/", verifyToken, createPost);
postRouter.get("/", verifyToken, getFeedPosts);
postRouter.get("/:userId/posts", verifyToken, getUserPost);
postRouter.patch("/:id/like", verifyToken, likePost);
