const express = require("express");
const { testController } = require("../controllers/testController");

// router Objext
const router = express.Router();

// routes
router.get("/", testController);

// export
module.exports = router;
