const express = require("express");

const router = express.Router();

const ControllerUsuario = require("./controller/ControllerUsuario");
const ControllerProduto = require("./controller/ControllerProduto");


router.get("/usuario/:id", ControllerUsuario.select);
router.post("/usuario", ControllerUsuario.insert);
router.put("/usuario/:id", ControllerUsuario.update);
router.delete("/usuario/:id", ControllerUsuario.remove);

router.get("/produto/:id", ControllerProduto.select);
router.post("/produto", ControllerProduto.insert);
router.put("/produto/:id", ControllerProduto.update);
router.delete("/produto/:id", ControllerProduto.remove);

module.exports = router;