import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) {
      res.status(403).json({ msg: "Access denied" });
    }
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
