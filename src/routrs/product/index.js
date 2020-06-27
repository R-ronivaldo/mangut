const express = require("express");

const productRouter = express.Router();

const ControllerProduct = require("../../controller/ControllerProduct");

const authMiddleware = require("../../middlewares/Auth");

// FUNÇÕES SEM TOKEN
productRouter.get("/product/catalogid/:id", ControllerProduct.selectByIdCatalog);

productRouter.use(authMiddleware)

// FUNÇÕES COM TOKEN
productRouter.post("/", ControllerProduct.insert);
productRouter.put("/:id", ControllerProduct.update);
productRouter.delete("/:id", ControllerProduct.remove);
productRouter.delete("/catalogid/:id", ControllerProduct.removeByIdCatalog);

module.exports = productRouter;