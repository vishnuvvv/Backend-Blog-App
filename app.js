import express from "express";
import mongoose from "mongoose";
import blogRouter from "./router/blog-routes.js";
import router from "./router/user-routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://vishnu:${process.env.MONGODB_PASSWORD}@cluster0.4ouzc50.mongodb.net/Blog?retryWrites=true&w=majority`
  )
  .then(() => app.listen(process.env.PORT))
  .then(() => {
    console.log("connected to Database and listening to localhost :5000");
  })
  .catch((err) => {
    console.log(err);
  });
