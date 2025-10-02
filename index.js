// Importaciones del proyecto
import express from "express";
import { engine } from "express-handlebars";
// Dependencias de desarrollo
import morgan from "morgan";
import { configDotenv } from "dotenv";
import { configHandleBars as config} from "./config.js";

// Modulos Internos
import usersRouter from "./src/routes/users.routes.js";

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
app.engine("hbs", engine(config))
app.set("view engine", "hbs");
// ENRUTAMIENTO: Manejo de direcciones
app.use("/users", usersRouter);
app.get("/", (req, res) => {
    res.json({
        title: "NodeJS Digitalers",
        message: "Bienvenido a Telecom Digitalers"
    })
})
app.listen(PORT, HOST, backLog);