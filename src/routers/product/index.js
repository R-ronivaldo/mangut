const express = require("express");

const productRouter = express.Router();

const ControllerProduct = require("../../controller/ControllerProduct");

const authMiddleware = require("../../middlewares/Auth");

// FUNÇÕES SEM TOKEN
productRouter.get("/product/catalogid/:id", ControllerProduct.selectByIdCatalog);
// FUNÇÕES COM TOKEN
productRouter.post("/", authMiddleware, ControllerProduct.insert);
productRouter.put("/:id", authMiddleware, ControllerProduct.update);
productRouter.delete("/:id", authMiddleware, ControllerProduct.remove);
productRouter.delete("/catalogid/:id", authMiddleware, ControllerProduct.removeByIdCatalog);

module.exports = productRouter;