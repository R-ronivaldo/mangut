const express = require("express");
const rateLimit = require("express-rate-limit");

const limitReached = (req, res) => {
    log.warn({ ip: req.ip }, "Rate limiter triggered");
    renderError(req, res) // Your function to render an error page
}

const ipLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 10, // limit each IP to 100 requests per windowMs 
    onLimitReached: function (req, res, options) {
                        log.warn({ ip: req.ip }, "Rate limiter triggered");
                        renderError(req, res) // Your function to render an error page
                    }, // called once when max is reached
    handler: function (req, res, options) {
            log.warn({ ip: req.ip }, "Rate limiter triggered");
            renderError(req, res) // Your function to render an error page
            }, // called for each subsequent request once max is reached
});

const authenticateRouter = express.Router();

const ControllerAuth = require("../../controller/ControllerAuth");

authenticateRouter.post("/", ipLimiter, ControllerAuth.acess);

module.exports = authenticateRouter;