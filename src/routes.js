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

router.get("/catalog/:id", ControllerCatalog.select);
router.post("/catalog", ControllerCatalog.insert);
router.put("/catalog/:id", ControllerCatalog.update);
router.delete("/catalog/:id", ControllerCatalog.remove);

router.get("/product/:id", ControllerProduct.select);
router.post("/product", ControllerProduct.insert);
router.put("/product/:id", ControllerProduct.update);
router.delete("/product/:id", ControllerProduct.remove);

router.get("/evaluation/:id", ControllerEvaluation.select);
router.post("/evaluation", ControllerEvaluation.insert);
router.put("/evaluation/:id", ControllerEvaluation.update);
router.delete("/evaluation/:id", ControllerEvaluation.remove);

router.get("/notify/:id", ControllerNotify.select);
router.post("/notify", ControllerNotify.insert);
router.put("/notify/:id", ControllerNotify.update);
router.delete("/notify/:id", ControllerNotify.remove);

module.exports = router;