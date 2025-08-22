const router = require("express").Router()
const fuelTypesRouter = require("./fuel_types.routes");
const gasStationRouter = require("./gas_station.routes")
const gasStationBranchRouter = require("./gas_station_branch.routes")
const gasStationFuelTypeRouter = require("./gasStationFuelTypeRouter.routes")

router.use('/fuel_types', fuelTypesRouter);
router.use('/gas_station', gasStationRouter);
router.use('/gas_station_branch', gasStationBranchRouter);
router.use('/gas_station_fuel_type', gasStationFuelTypeRouter);


module.exports = router;
