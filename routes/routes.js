const express = require("express");

const router = express.Router();

router.use("/categories", require("./category.routes"));
router.use("/transactions", require("./transaction.routes"));
router.use("/charts", require("./chart.routes"));

module.exports = router;
