const express = require("express");

const notifyRouter = express.Router();

const ControllerNotify = require("../../controller/ControllerNotify");

const authMiddleware = require("../../middlewares/Auth");

// FUNÇÕES SEM TOKEN
notifyRouter.get("/productid/:id", ControllerNotify.selectByIdProduct);
// FUNÇÕES COM TOKEN
notifyRouter.post("/", authMiddleware, ControllerNotify.insert);
notifyRouter.put("/:id", authMiddleware, ControllerNotify.update);
notifyRouter.delete("/:id", authMiddleware, ControllerNotify.remove);
notifyRouter.delete("/productid/:id", authMiddleware, ControllerNotify.removeByIdProduct);

module.exports = notifyRouter;