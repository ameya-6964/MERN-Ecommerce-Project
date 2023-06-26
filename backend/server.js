import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import connectDb from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDb();
const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
