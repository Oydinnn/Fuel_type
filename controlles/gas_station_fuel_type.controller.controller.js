const db = require("../config/db.config");

// post gas_station_fuel_type
const createGasStationFuelType = (req, res) =>{
  const { gas_station_branch_id, fuel_type_id, price, is_exists = false } = req.body;

   if (!gas_station_branch_id || !fuel_type_id || !price || is_exists === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }
  
  const createQuery = `INSERT INTO gas_station_fuel_type (gas_station_branch_id, fuel_type_id, price, is_exists) VALUES (?,?,?,?)`;

  db.query( 
    createQuery,
    [gas_station_branch_id, fuel_type_id, price, is_exists],
    (error, results) => {
      if (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
      console.log({
  gas_station_branch_id,
  fuel_type_id,
  price,
  is_exists
});

      res.status(201).json({
        statusCode: 201,
        message: "New Gas Station Fuel type added to branch",
        id: results.insertId,
      });
    }
  );
};

// get gas_station_fuel_type
const getGasStationFuelType = (req, res) => {
  const getQuery = `SELECT * FROM gas_station_fuel_type`;
  db.query(getQuery, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        message: error.message,
      });
    }

    res.status(200).json({
      statusCode: 200,
      message: "gas_station_branch retrieved successfully",
      data: result,
    });
  });
};

// get one  gas_station_fuel_type
const getOneGasStationFuelType = (req, res) => {
  const id = req.params.id;
  const getOneQuery = `SELECT * FROM gas_station_fuel_type WHERE id = ?`;
  db.query(getOneQuery, [id], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: error.message,
      });
    }

    if (!result.length) {
      return res.status(404).json({
        message: "A gas_station_branch not found",
      });
    }

    res.json({
      statusCode: 200,
      message: "a gas_station_branch retrieved successfully",
      data: result[0],
    });
  });
};

// update gas_station_fuel_type
const updateGasStationFuelType = (req, res) => {
  const id = req.params.id;
  const { price, is_exists } = req.body;

  const updateQuery = `UPDATE gas_station_fuel_type SET price = ?, is_exists = ?  WHERE id = ?`;

  db.query(
    updateQuery, 
    [price, is_exists, id], 
    (error, result) => {
    if (error) {
      console.error("Error updating fuel type:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    res.json({
      statusCode: 200,
      message: "a gas_station_fuel_type updated successfully",
      data: result.affectedRows,
    });
  });
};

// delete gas_station_fuel_type
const deleteGasStationFuelType = (req, res) => {
  const id = req.params.id;
  const deleteQuery = `DELETE FROM gas_station_fuel_type where id = ?`;
  db.query(
    deleteQuery, 
    [id], 
    (error, result) => {
    if (error) {
      return res.status(500).json({
        message: error.message,
      });
    }

    res.json({
      statusCode: 200,
      message: "a gas_station_branch deleted successfully",
      data: result.affectedRows,
    });
  });
};

module.exports = {
  createGasStationFuelType,
  getGasStationFuelType,
  getOneGasStationFuelType,
  updateGasStationFuelType,
  deleteGasStationFuelType,
};
