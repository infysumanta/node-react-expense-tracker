const asyncHandler = require("express-async-handler");
const { Category } = require("./../models");
exports.create = asyncHandler(async (_req, res) => {
  try {
    const category = new Category({
      type: "Savings",
      color: "#1f3b5c",
    });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});

exports.getAll = asyncHandler(async (_req, res) => {
  try {
    const categories = await Category.find().select("type color");
    res.status(200).send(categories);
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});
