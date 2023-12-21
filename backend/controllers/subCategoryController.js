const categoryModel = require("../models/categoryModel");
const subCategoryModel = require("../models/subCategoryModel");

exports.subCategoryController = async (req, res) => {
  try {
    const { name, description, id } = req.body;

    const check = await subCategoryModel.find({ name });

    if (check.length > 0) {
      res.send({ Error: "This category is already exists" });
    }

    let subCategory = new subCategoryModel({
      name,
      description,
      category: id,
    });
    subCategory.save();

    await categoryModel.findOneAndUpdate(
      {
        _id: subCategory.category,
      },
      { $push: { subCategory: subCategory._id } },
      { new: true }
    );

    res.send({
      Success: "subCategory create successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateSubCategory = async (req, res) => {
  try {
    const { name, status } = req.body;
    if (status == "rejected" || status == "waiting") {
      await subCategoryModel.findOneAndUpdate(
        { name },
        { $set: { isActive: false, status: status } },
        { new: true }
      );
    } else if (status == "approved") {
      await subCategoryModel.findOneAndUpdate(
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


exports.getAllSubCategory = async (req, res) => {
  let data = await subCategoryModel.find({}).populate("category")
  res.send(data);
};
