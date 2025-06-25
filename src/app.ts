import { Request, Response } from "express";
import cors from "cors";
import express from "express";
import { ProductRoutes } from "./app/modules/product/product.routes";
import { OrderRoutes } from "./app/modules/order/order.routes";
import { UserRoutes } from "./app/modules/user/user.routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
const app = express();

//! middleware
app.use(express.json());
app.use(cors());

// ! application routes (product)
app.use("/api/products", ProductRoutes);

// ! application routes (order)
app.use("/api", OrderRoutes);

// ! application routes (user)
app.use("/api/user", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// !global error handler
app.use(globalErrorHandler);

export default app;
