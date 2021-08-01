const express = require("express");
const cors = require("cors");

//Initializations
const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/clientes", require("./Routes/clientes"));
app.use("/api/pedidos", require("./Routes/pedidos"));
app.use("/api/productos", require("./Routes/productos"));

module.exports = app;
