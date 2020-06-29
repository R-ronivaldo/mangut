const express = require("express");

const userRouter = express.Router();

const ControllerUser = require("../../controller/ControllerUser");

const authMiddleware = require("../../middlewares/Auth");

userRouter.post("/", ControllerUser.insert);
userRouter.get("/:id", ControllerUser.select);
userRouter.put("/:id", authMiddleware, ControllerUser.update);
userRouter.delete("/:id", authMiddleware, ControllerUser.remove);

module.exports = userRouter;