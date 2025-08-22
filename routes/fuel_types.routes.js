const {
  createFuelType,
  getFuelType,
  getOneFuelType,
  updateFuelType,
  deleteFuelType,
} = require("../controlles/fuel_types.controller");

const router = require("express").Router();

router.post("/", createFuelType);
router.get("/", getFuelType);
router.get("/:id", getOneFuelType);
router.put("/:id", updateFuelType);
router.delete("/:id", deleteFuelType);

module.exports = router;
