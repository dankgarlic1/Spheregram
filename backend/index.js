import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";
import { register } from "./controller/auth.js";
import { authRouter } from "./routes/auth.js";
import { userRouter } from "./routes/users.js";

const __fileName = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__fileName);
dotenv.config();
const app = express();
//middlewares
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

//routes with files

app.post("/auth/register", upload.single("picture"), register); //this route is here intentionally becaue we needed upload
app.use("/auth", authRouter);
app.use("/user", userRouter);

//MONGOOSE setup
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on Port ${PORT}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
