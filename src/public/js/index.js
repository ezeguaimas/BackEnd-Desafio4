const socket = io();

const updatedProducts = (products) => {
  const productsContainer = document.getElementById("RTProductsContainer");
  products.forEach((product) => {
    productsContainer.innerHTML = `
    `;
    productsContainer.appendChild(productsContainer);
  });
};

socket.on("updatedProducts", (products) => {
  updatedProducts(products);
});
