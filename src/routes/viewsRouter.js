import { Router } from "express";
import ProductManager from "../managers/ProductManager.js";
const router = Router();

router.get("/", async (req, res) => {
  const productManager = new ProductManager();
  const products = await productManager.getProducts();
  res.render("home", { title: "E-Commerce Random", products: products });
});

router.get("/realtimeproducts", async (req, res) => {
  const productManager = new ProductManager();
  const products = await productManager.getProducts();
  res.render("realTimeProducts", {
    title: "E-Commerce Random",
    products: products,
  });
});

export default router;
