import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import connectDb from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDb();
const app = express();

// Body Parser Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie-Parser Middleware
app.use(cookieParser());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
