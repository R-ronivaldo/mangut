const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");


app = express();

//habilitando json na aplicação
app.use(express.json());

//connect db
mongoose.connect('mongodb://localhost/nodeapi', { useNewUrlParser: true });

//chamar todos os models
requireDir("./src/model");


app.use(cors());
//chamando as rotas
app.use("/", require("./src/routers/router"));

//iniciando o server
app.listen(3001);