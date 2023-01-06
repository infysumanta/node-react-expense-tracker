const express = require("express");
const { chartController } = require("../controller");

const router = express.Router();

router.route("/").get(chartController.getLabels);

module.exports = router;
