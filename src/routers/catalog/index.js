const express = require("express");

const catalogRouter = express.Router();

const ControllerCatalog = require("../../controller/ControllerCatalog");

const authMiddleware = require("../../middlewares/Auth");

// FUNÇÕES SEM TOKEN
catalogRouter.get("/profileid/:id", ControllerCatalog.selectByIdProfile);
// FUNÇÕES COM TOKEN
catalogRouter.post("/", authMiddleware, ControllerCatalog.insert);
catalogRouter.put("/:id", authMiddleware, ControllerCatalog.update);
catalogRouter.delete("/:id", authMiddleware, ControllerCatalog.remove);

module.exports = catalogRouter;