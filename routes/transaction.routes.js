const express = require("express");
const { transactionController } = require("../controller");

const router = express.Router();

router
  .route("/")
  .post(transactionController.create)
  .get(transactionController.getAll)
  .delete(transactionController.delete);

module.exports = router;
