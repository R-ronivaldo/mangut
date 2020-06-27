const express = require("express");

const authMiddleware = require("../../middlewares/Auth");

const catalogRouter = express.Router();

const ControllerCatalog = require("../../controller/ControllerCatalog");

// FUNÇÕES SEM TOKEN
catalogRouter.get("/profileid/:id", ControllerCatalog.selectByIdProfile);

catalogRouter.use(authMiddleware);
// FUNÇÕES COM TOKEN
catalogRouter.post("/", ControllerCatalog.insert);
catalogRouter.put("/:id", ControllerCatalog.update);
catalogRouter.delete("/:id", ControllerCatalog.remove);

module.exports = catalogRouter;