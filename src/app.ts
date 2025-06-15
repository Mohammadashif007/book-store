import { Request, Response } from "express";
import cors from "cors";
import express from "express";
import { ProductRoutes } from "./app/modules/product/product.routes";
import { OrderRoutes } from "./app/modules/order/order.routes";
const app = express();

//! middleware
app.use(express.json());
app.use(cors());

// ! application routes (product)
app.use("/api/products", ProductRoutes);

// ! application routes (order)
app.use("/api", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
