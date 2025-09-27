// Importaciones del proyecto
import express from "express";
// Dependencias de desarrollo
import morgan from "morgan";
import { configDotenv } from "dotenv";
// Modulos Internos
import { dbConn } from "./src/config/dbconn.js";
import usersRouter from "./src/routes/users.routes.js";
import productsRouter from "./src/routes/products.routes.js";

// VARIABLES DE ENTORNO: Lectura y Configuracion
configDotenv();
const {
    PORT = 4200,
    HOST = "127.0.0.1",
    URI = "mongodb://localhost:27017/telecom"
} = process.env;
const backLog = () => console.log(`servicio ejecutandose en http://${HOST}:${PORT}`)

// SERVIDOR HTTP: Creacion y configuracion
const app = express();
app.use(morgan("dev")); // Registro de Solicitudes
dbConn(URI);
app.set(express.json()); // uso de FormData
app.set(express.urlencoded({extended: true})) // x-www-formurlencoded
// ENRUTAMIENTO: Manejo de direcciones
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.get("/", (req, res) => {
    res.json({
        title: "NodeJS Digitalers",
        message: "Bienvenido a Telecom Digitalers"
    })
})
app.listen(PORT, HOST, backLog);