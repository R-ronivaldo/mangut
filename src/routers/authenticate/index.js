const express = require("express");
const rateLimit = require("express-rate-limit");

const authenticateRouter = express.Router();

const limiter = rateLimit({
    windowMs: 1 * 30 * 1000,
    max: 10,
    handler: function(req, res){
        res.status(405).send("Number of attempts exceeded, try in 30 seconds");
    },
    onLimitReached: function(req, res){
        res.status(405).send("number of attempts exceeded, try in 30 seconds!");
    }
});

const ControllerAuth = require("../../controller/ControllerAuth");

authenticateRouter.post("/", limiter, ControllerAuth.acess);

module.exports = authenticateRouter;