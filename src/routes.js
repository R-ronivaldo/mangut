const express = require("express");

const router = express.Router();

const ControllerUser = require("./controller/ControllerUser");
const ControllerProduct = require("./controller/ControllerProduct");
const ControllerCatalog = require("./controller/ControllerCatalog");
const ControllerEvaluation = require("./controller/ControllerEvaluation");
const ControllerNotify = require("./controller/ControllerNotify");


router.get("/user/:id", ControllerUser.select);
router.post("/user", ControllerUser.insert);
router.put("/user/:id", ControllerUser.update);
router.delete("/user/:id", ControllerUser.remove);
router.post("/authenticate", ControllerUser.acess);

router.get("/catalog/:id", ControllerCatalog.selectById);
router.post("/catalog", ControllerCatalog.insert);
router.put("/catalog/:id", ControllerCatalog.update);
router.delete("/catalog/:id", ControllerCatalog.remove);
router.get("/catalog/profileid/:id", ControllerCatalog.selectByIdProfile);

router.get("/product/:id", ControllerProduct.selectById);
router.post("/product", ControllerProduct.insert);
router.put("/product/:id", ControllerProduct.update);
router.delete("/product/:id", ControllerProduct.remove);
router.get("/product/catalogid/:id", ControllerProduct.selectByIdCatalog);
router.delete("/product/catalogid/:id", ControllerProduct.removeByIdCatalog);

router.get("/evaluation/:id", ControllerEvaluation.selectById);
router.post("/evaluation", ControllerEvaluation.insert);
router.put("/evaluation/:id", ControllerEvaluation.update);
router.delete("/evaluation/:id", ControllerEvaluation.remove);
router.get("/evaluation/productid/:id", ControllerEvaluation.selectByIdProduct);
router.delete("/evaluation/produtoid/:id", ControllerEvaluation.removeByIdProduct);

router.get("/notify/:id", ControllerNotify.selectById);
router.post("/notify", ControllerNotify.insert);
router.put("/notify/:id", ControllerNotify.update);
router.delete("/notify/:id", ControllerNotify.remove);
router.get("/notify/productid/:id", ControllerNotify.selectByIdProduct);
router.delete("/notify/productid/:id", ControllerNotify.removeByIdProduct);

module.exports = router;