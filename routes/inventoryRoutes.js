const express = require("express");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// routes
// Add inventroy || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

// get all blood records
router.get("/get-inventory", authMiddleware, getInventoryController);

// get recent blood records
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

// get hospital blood records
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

// get donar records
router.get("/get-donars", authMiddleware, getDonarsController);

// get hospital records
router.get("/get-hospitals", authMiddleware, getHospitalController);

// get ORG records
router.get("/get-organisation", authMiddleware, getOrgnaisationController);

// get ORG records
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrgnaisationForHospitalController
);

module.exports = router;
