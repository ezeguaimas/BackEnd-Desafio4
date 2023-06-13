import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import ProductRouter from "./routes/ProductRouter.js";
import CartRouter from "./routes/CartRouter.js";
import viewsRouter from "./routes/viewsRouter.js";
import { Server } from "socket.io";

const app = express();
const port = 8080;

// Iniciar el servidor
const httpServer = app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
const io = new Server(httpServer);

app.engine("handlebars", handlebars.engine());
app.set("views", "views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", ProductRouter);

app.use("/api/carts", CartRouter);

app.use("/", viewsRouter);

httpServer.on("connection", (socket) => {
  console.log("Nueva conexión updatedProducts");
});
