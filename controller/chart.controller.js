const asyncHandler = require("express-async-handler");
const { Category, Transaction } = require("./../models");

exports.getLabels = async (req, res) => {
  try {
    const data = await Transaction.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "type",
          foreignField: "type",
          as: "category_info",
        },
      },
      {
        $unwind: "$category_info",
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};
