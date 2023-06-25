import express from "express";
import dotenv from "dotenv";
import products from "./data/product.js";
dotenv.config();
const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
