import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongodb from "mongodb";
import mongoose from "mongoose";
import connectDB from "./db.js";
import { userRoute } from "./src/routes/userRoute.js";
import { PORT } from "./config.js";
import { categoryRoute } from "./src/routes/categoryRoute.js"

//Corremos la aplicacion express
const app = express();

//CORS permite recibir solicitudes de origenes cruzados
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

//Conexion a la base de datos
await connectDB();

//Parseamos a json las solicitudes
app.use(bodyParser.json());

//Parseamos el contenido de las solicitudes para leerlas
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas
app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);

//Con este comando levantamos el servidor
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
