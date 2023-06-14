import { io } from "./app.js";
import ProductManager from "./managers/ProductManager.js";

export async function updatedProducts() {
  const productManager = new ProductManager();
  const products = await productManager.getProducts();
  io.emit("updatedProducts", products);
}
