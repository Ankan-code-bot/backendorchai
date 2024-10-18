import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = mongoose();
app.use(cors({
  origin: process.env.CORS-ORIGIN,
  credentials: true
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

export {app};