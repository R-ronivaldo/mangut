const express = require("express");

const authMiddleware = require("../../middlewares/Auth");

const evaluationRouter = express.Router();


const ControllerEvaluation = require("../../controller/ControllerEvaluation");

// funÇoes semm token
evaluationRouter.get("/productid/:id", ControllerEvaluation.selectByIdProduct);

evaluationRouter.use(authMiddleware);

// funÇoes comm token
evaluationRouter.post("/", ControllerEvaluation.insert);
evaluationRouter.put("/:id", ControllerEvaluation.update);
evaluationRouter.delete("/:id", ControllerEvaluation.remove);
evaluationRouter.delete("/produtoid/:id", ControllerEvaluation.removeByIdProduct);

module.exports = evaluationRouter;