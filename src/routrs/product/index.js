const express = require("express");

const authMiddleware = require("../../middlewares/Auth");

const productRouter = express.Router();


const ControllerProduct = require("../../controller/ControllerProduct");

// funÇoes sem token
productRouter.get("/product/catalogid/:id", ControllerProduct.selectByIdCatalog);

productRouter.use(authMiddleware)

// funÇoes com token
productRouter.post("/", ControllerProduct.insert);
productRouter.put("/:id", ControllerProduct.update);
productRouter.delete("/:id", ControllerProduct.remove);
productRouter.delete("/catalogid/:id", ControllerProduct.removeByIdCatalog);

module.exports = productRouter;