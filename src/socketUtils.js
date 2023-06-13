import ProductManager from "./managers/ProductManager";

const updatedProducts = async (io) => {
  const productManager = new ProductManager();
  const products = await productManager.getProducts();
  io.emit("updatedProducts", products);
};
