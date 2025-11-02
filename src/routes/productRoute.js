import express from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

export const productRoute = express.Router();

productRoute.post("/create", createProduct);
productRoute.get("/", getProducts);
productRoute.patch("/update/:id", updateProduct);
productRoute.delete("/delete/:id", deleteProduct);
