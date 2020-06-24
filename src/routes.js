const express = require("express");

const router = express.Router();

const ControllerUsuario = require("./controller/ControllerUsuario");


router.get("/usuario/:id", ControllerUsuario.select);
router.post("/usuario", ControllerUsuario.insert);
router.put("/usuario/:id", ControllerUsuario.update);
router.delete("/usuario/:id", ControllerUsuario.remove);

module.exports = router;