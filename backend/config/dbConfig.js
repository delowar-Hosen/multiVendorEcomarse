const mongoose = require("mongoose");
const chalk = require("chalk");

const setupDb = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URL, () => {
    console.log(chalk.bgBlack("Db Connected"));
  });
};

module.exports = setupDb;
