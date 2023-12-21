const express = require("express");
const {
  categoryController,
  updateCategory,
  getAllCategory,
} = require("../../controllers/categoryController");
const {
  subCategoryController,
  updateSubCategory,
  getAllSubCategory,
} = require("../../controllers/subCategoryController");
const _ = express.Router();

_.post("/category", categoryController);
_.post("/categorystatus", updateCategory);
_.post("/subcategory", subCategoryController);
_.post("/subcategorystatus", updateSubCategory);
_.get("/getallcategory", getAllCategory);
_.get("/getallsubcategory", getAllSubCategory);

module.exports = _;
