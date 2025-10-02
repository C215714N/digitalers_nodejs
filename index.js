import appData from "./src/data/appdata.json" with { type: "json" }
// Importaciones del proyecto
import express from "express";
// Dependencias de desarrollo
import morgan from "morgan";
import { configDotenv } from "dotenv";
// Modulos Internos
import usersRouter from "./src/routes/users.routes.js";
import productsRouter from "./src/routes/products.routes.js";

// VARIABLES DE ENTORNO: Lectura y Configuracion
configDotenv();
const {
    PORT = 4200,
    HOST = "127.0.0.1"
} = process.env;
const backLog = () => console.log(`servicio ejecutandose en http://${HOST}:${PORT}`)

// SERVIDOR HTTP: Creacion y configuracion
const app = express();
app.use(morgan("dev")); // Registro de Solicitudes
// MOTOR DE PLANTILLAS: Configuracion
app.set("view engine", "ejs");

// ENRUTAMIENTO: Manejo de direcciones
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.get("/", (req, res) => {
    res.render('index', appData)
})
app.use(express.static("public"));
app.listen(PORT, HOST, backLog);