const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");


app = express();

//habilitando json na aplicação
app.use(express.json());

//connect db
//Bando do mongodb.com.br
mongoose.connect('mongodb+srv://deploy:under2020@cluster0.0jkcc.gcp.mongodb.net/mangut?retryWrites=true&w=majority', { useNewUrlParser: true });
//Banco do localhost
//mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//chamar todos os models
requireDir("./src/model");


app.use(cors());
//chamando as rotas
app.use("/", require("./src/routers/router"));

//iniciando o server
app.listen(process.env.PORT || 3001);