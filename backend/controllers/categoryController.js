const categoryModel = require("../models/categoryModel");

exports.categoryController = async (req, res) => {
  try {
    const { name, description } = req.body;

    const check = await categoryModel.find({ name });

    if (check.length > 0) {
      res.send({ Error: "This category is already exists" });
    }

    let category = new categoryModel({
      name,
      description,
    });

    category.save();

    res.send({
      category,
      Success: "Category create successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { name, status } = req.body;
    if (status == "rejected" || status == "waiting") {
      await categoryModel.findOneAndUpdate(
        { name },
        { $set: { isActive: false, status: status } },
        { new: true }
      );
    } else if (status == "approved") {
      await categoryModel.findOneAndUpdate(
        { name },
        { $set: { isActive: true, status: status } },
        { new: true }
      );
    }
    res.send({ Success: "Status updated" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAllCategory = async (req, res) => {
  let data = await categoryModel.find({}).populate("subCategory");
  res.send(data);
};
