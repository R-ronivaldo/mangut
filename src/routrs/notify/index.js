const express = require("express");

const authMiddleware = require("../../middlewares/Auth");

const notifyRouter = express.Router();

const ControllerNotify = require("../../controller/ControllerNotify");

// funÇoes semm token
notifyRouter.get("/productid/:id", ControllerNotify.selectByIdProduct);

notifyRouter.use(authMiddleware);

// funÇoes com token
notifyRouter.post("/", ControllerNotify.insert);
notifyRouter.put("/:id", ControllerNotify.update);
notifyRouter.delete("/:id", ControllerNotify.remove);

notifyRouter.delete("/productid/:id", ControllerNotify.removeByIdProduct);

module.exports = notifyRouter;