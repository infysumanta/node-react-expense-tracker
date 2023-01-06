const express = require("express");
const { categoryController } = require("../controller");

const router = express.Router();

router
  .route("/")
  .post(categoryController.create)
  .get(categoryController.getAll);

module.exports = router;
