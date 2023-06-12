import express from "express";
import handlebars from "express-handlebars";
import ProductRouter from "./routes/ProductRouter.js";
import CartRouter from "./routes/CartRouter.js";
import viewsRouter from "./routes/viewsRouter.js";
import { Server } from "socket.io";

const app = express();
const port = 8080;

app.engine("handlebars", handlebars.engine());
app.set("views", "views");
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home.handlebars", { body: home.handlebars });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("/public"));

// Ruta de productos
app.use("/api/products", ProductRouter);

// Ruta de carrito
app.use("/api/carts", CartRouter);

//Ruta de views
app.use("/views", viewsRouter);

// Iniciar el servidor
const httpServer = app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
const io = new Server(httpServer);
