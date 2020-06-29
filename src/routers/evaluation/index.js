const express = require("express");

const evaluationRouter = express.Router();

const ControllerEvaluation = require("../../controller/ControllerEvaluation");

const authMiddleware = require("../../middlewares/Auth");

// FUNÇÕES SEM TOKEN
evaluationRouter.get("/productid/:id", ControllerEvaluation.selectByIdProduct);

evaluationRouter.use(authMiddleware);

// FUNÇÕES COM TOKEN
evaluationRouter.post("/", ControllerEvaluation.insertOrUpdate);
evaluationRouter.delete("/:id", ControllerEvaluation.remove);
evaluationRouter.delete("/produtoid/:id", ControllerEvaluation.removeByIdProduct);

module.exports = evaluationRouter;