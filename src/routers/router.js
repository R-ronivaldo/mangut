const express = require("express");

const router = express.Router();

router.use("/user", require("./user"));
router.use("/catalog",require("./catalog"));
router.use("/product", require("./product"));
router.use("/evaluation", require("./evaluation"));
router.use("/notify", require("./notify"));
router.use("/authenticate", require("./authenticate"));

module.exports = router;