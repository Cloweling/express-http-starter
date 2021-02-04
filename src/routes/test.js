const express = require("express");
const cors = require("cors");

const { test: controller } = require("../controllers");
const { test:  validator } = require("../validations")

const router = express.Router();

router.get("/test", validator.test , cors(), controller.getTest);
router.get("/testApi", cors(), controller.getTestApi);

module.exports = router;
