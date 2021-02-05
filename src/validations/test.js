const { check } = require("express-validator")

const test = [
  check("title")
    .not()
    .isEmpty()
    .withMessage("Is required title in the query")
    .isString()
    .withMessage("Only letters and digits allowed in title"),
  check("number")
    .not()
    .isEmpty()
    .withMessage("Is required number in the query")
    .isNumeric()
    .withMessage("Only digits allowed in number"),
]

module.exports.test = test
