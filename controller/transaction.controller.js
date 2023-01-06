const asyncHandler = require("express-async-handler");
const { Category, Transaction } = require("./../models");

exports.create = asyncHandler(async (req, res) => {
  try {
    const { name, type, amount } = req.body;

    if (!name || !type || !amount) {
      res.status(400);
      throw new Error("Send all the Required Data");
    }

    const transaction = new Transaction({
      name: name,
      type: type,
      amount: amount,
    });

    await transaction.save();
    res.status(200).json(transaction);
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});

exports.getAll = asyncHandler(async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    return res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});

exports.delete = asyncHandler(async (req, res) => {
  try {
    const { transactionId } = req.body;
    await Transaction.findByIdAndDelete(transactionId);
    res.status(200).send("Transaction Deleted Successfully");
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});
