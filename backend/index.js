require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const routes = require("./routes");
const setUpDb = require("./config/dbConfig.js");
var cors = require("cors");
const path = require('path')
const app = express();

//middlware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(routes);
setUpDb();

app.listen("8000", (req, res) => {
  console.log(chalk.blue.bgRed.bold("Port on running 8000"));
});
