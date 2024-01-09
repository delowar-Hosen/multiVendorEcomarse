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

_.post("/createcategory", categoryController);
_.post("/categorystatus", updateCategory);
_.post("/createsubcategory", subCategoryController);
_.post("/subcategorystatus", updateSubCategory);
_.get("/getallcategory", getAllCategory);
_.get("/getallsubcategory", getAllSubCategory);

module.exports = _;
