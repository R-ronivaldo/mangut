const express = require("express");

const userRouter = express.Router();

const ControllerUser = require("../../controller/ControllerUser");

userRouter.post("/", ControllerUser.insert);
userRouter.put("/:id", ControllerUser.update);
userRouter.delete("/:id", ControllerUser.remove);
userRouter.get("/:id", ControllerUser.select);

module.exports = userRouter;