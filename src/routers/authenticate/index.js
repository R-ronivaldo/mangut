const express = require("express");
const rateLimit = require("express-rate-limit");

const authenticateRouter = express.Router();

const limiter = rateLimit({
    windowMs: 1 * 30 * 1000,
    max: 10,
    handler: function(req, res){
        res.status(405).send("Called for each subsequent request once max is reached");
    },
    onLimitReached: function(req, res){
        res.status(405).send("Called for each subsequent request once max is reached");
    }
});

const ControllerAuth = require("../../controller/ControllerAuth");

authenticateRouter.post("/", limiter, ControllerAuth.acess);

module.exports = authenticateRouter;