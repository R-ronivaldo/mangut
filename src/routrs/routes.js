const express = require("express");

const router = express.Router();

router.use("/user", require("./user/index"));
router.use("/catalog",require("./catalog/index"));
router.use("/product", require("./product/index"));
router.use("/evaluation", require("./evaluation/index"));
router.use("/notify", require("./notify/index"));
router.use("/authenticate", require("./authenticate/index"));

module.exports = router;