const {
  createGasStationBranch,
  getGasStationBranch,
  getOneGasStationBranch,
  updateGasStationBranch,
  deleteGasStationBranch,
} = require("../controlles/gas_station_branch.controller");

const router = require("express").Router();

router.post("/", createGasStationBranch);
router.get("/", getGasStationBranch);
router.get("/:id", getOneGasStationBranch);
router.put("/:id", updateGasStationBranch);
router.delete("/:id", deleteGasStationBranch);

module.exports = router;