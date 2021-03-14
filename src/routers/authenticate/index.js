const express = require("express");
const redis = require("redis");
const rateLimit = require("koa-ratelimit");

const authenticateRouter = express.Router();

const ControllerAuth = require("../../controller/ControllerAuth");

var emailBasedRatelimit = ratelimit({
    db: redis.createClient(),
    duration: 60000,
    max: 5,
    id: function (context) {
      return context.body.email;
    }
});

var ipBasedRatelimit = ratelimit({
    db: redis.createClient(),
    duration: 60000,
    max: 5,
    id: function (context) {
      return context.ip;
    }
});

authenticateRouter.post("/", emailBasedRatelimit, ipBasedRatelimit ,ControllerAuth.acess);

module.exports = authenticateRouter;