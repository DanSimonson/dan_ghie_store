import express from "express";
//import mongoose from "mongoose";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";

/**
 * mongodb+srv://dan123:dan123@cluster0.rty67.mongodb.net/store?retryWrites=true&w=majority
 */
dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use("/api/users", userRouter);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
