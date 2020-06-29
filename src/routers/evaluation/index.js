const express = require("express");

const evaluationRouter = express.Router();

const ControllerEvaluation = require("../../controller/ControllerEvaluation");

const authMiddleware = require("../../middlewares/Auth");

// FUNÇÕES SEM TOKEN
evaluationRouter.get("/productid/:id", ControllerEvaluation.selectByIdProduct);
// FUNÇÕES COM TOKEN
evaluationRouter.post("/", authMiddleware, ControllerEvaluation.insertOrUpdate);
evaluationRouter.delete("/:id", authMiddleware, ControllerEvaluation.remove);
evaluationRouter.delete("/produtoid/:id", authMiddleware, ControllerEvaluation.removeByIdProduct);

module.exports = evaluationRouter;