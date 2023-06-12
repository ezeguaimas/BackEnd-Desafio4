const socket = io();

const updatedProducts = (products) => {
  const RTProductsContainer = document.getElementById("RTProductsContainer");
  products.forEach(() => {
    RTProductsContainer.innerHTML = `
        <ul>
        {{#each products}}
          <li>
            <h2>{{this.title}}</h2>
            <p>{{this.description}}</p>
            <p>$ {{this.price}}</p>
            <p> Stock: {{this.stock}}</p>
            <p>Categoría: {{this.category}}</p>
          </li>
        {{/each}}
        </ul>
    `;
    RTProductsContainer.appendChild();
  });
};

socket.on("connect", () => {
  socket.emit("newConnection", socket.id);
});

socket.on("updatedProducts", (products) => {
  updatedProducts(products);
});
