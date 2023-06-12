import ProductManager from "../managers/productManager.js";

const updatedProducts = async (io) => {
    const productManager = new ProductManager();
    const products = await productManager.getProducts();
    io.emit('updatedProducts', products)
};

io.emit(updatedProducts, products)


//export {updatedProducts};