const express = require("express");

const authenticateRouter = express.Router();

const ControllerAuth = require("../../controller/ControllerAuth");

authenticateRouter.post("/", ControllerAuth.acess);

module.exports = authenticateRouter;