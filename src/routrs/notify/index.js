const express = require("express");

const notifyRouter = express.Router();

const ControllerNotify = require("../../controller/ControllerNotify");

const authMiddleware = require("../../middlewares/Auth");

// FUNÇÕES SEM TOKEN
notifyRouter.get("/productid/:id", ControllerNotify.selectByIdProduct);

notifyRouter.use(authMiddleware);

// FUNÇÕES COM TOKEN
notifyRouter.post("/", ControllerNotify.insert);
notifyRouter.put("/:id", ControllerNotify.update);
notifyRouter.delete("/:id", ControllerNotify.remove);
notifyRouter.delete("/productid/:id", ControllerNotify.removeByIdProduct);

module.exports = notifyRouter;