const {
  createGasStation,
  getGasStation,
  getOneGasStation,
  updateGasStation,
  deleteGasStation,
} = require("../controlles/gas_station.controller");

const router = require("express").Router();

router.post("/", createGasStation);
router.get("/", getGasStation);
router.get("/:id", getOneGasStation);
router.put("/:id", updateGasStation);
router.delete("/:id", deleteGasStation);

module.exports = router;