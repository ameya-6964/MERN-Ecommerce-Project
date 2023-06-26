import express from "express";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import connectDb from "./config/db.js";

dotenv.config();
connectDb();
const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
