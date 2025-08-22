const {
  createGasStationFuelType,
  getGasStationFuelType,
  getOneGasStationFuelType,
  updateGasStationFuelType,
  deleteGasStationFuelType,
} = require("../controlles/gas_station_fuel_type.controller.controller");

const router = require("express").Router();

router.post("/", createGasStationFuelType);
router.get("/", getGasStationFuelType);
router.get("/:id", getOneGasStationFuelType);
router.put("/:id", updateGasStationFuelType);
router.delete("/:id", deleteGasStationFuelType);

module.exports = router;