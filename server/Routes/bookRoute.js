const express = require("express");
const { addbook } = require("../Controller/bookController");

const bookroute = express.Router();

bookroute.post('/addbook', addbook)


 module.exports = bookroute;