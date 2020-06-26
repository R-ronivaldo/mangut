const express = require("express");

const authMiddleware = require("../../middlewares/Auth");

const evaluationRouter = express.Router();


const ControllerEvaluation = require("../../controller/ControllerEvaluation");

// funÇoes semm token
evaluationRouter.get("/evaluation/productid/:id", ControllerEvaluation.selectByIdProduct);

evaluationRouter.use(authMiddleware);

// funÇoes comm token
evaluationRouter.post("/evaluation", ControllerEvaluation.insert);
evaluationRouter.put("/evaluation/:id", ControllerEvaluation.update);
evaluationRouter.delete("/evaluation/:id", ControllerEvaluation.remove);
evaluationRouter.delete("/evaluation/produtoid/:id", ControllerEvaluation.removeByIdProduct);

module.exports = evaluationRouter;