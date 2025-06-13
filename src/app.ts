import { Request, Response } from "express";
import cors from "cors";
import express from "express";
import { ProductRoutes } from "./app/modules/book/product.routes";
const app = express();

//! middleware
app.use(express.json());
app.use(cors());


// ! application routes
app.use("/api/products", ProductRoutes)


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
