const db = require("../config/db.config");

// post gas_station_branch
const createGasStationBranch = (req, res) =>{
  const { gas_station_id, name, address, location, phone_number } = req.body;
  
  const createQuery = `INSERT INTO gas_station_branch(gas_station_id, name, address, location, phone_number) VALUES (?,?,?,?,?)`;

  db.query( 
    createQuery,
    [gas_station_id, name, address, location, phone_number],
    (error, results) => {
      if (error) {
        return res.status(500).json({
          message: error.message,
        });
      }

      res.status(201).json({
        statusCode: 201,
        message: "New Gas Station Branch added",
        id: results.insertId,
      });
    }
  );
};

// get gas_station_branch
const getGasStationBranch = (req, res) => {
  const getQuery = `SELECT * FROM gas_station_branch`;
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

// get one  gas_station_branch
const getOneGasStationBranch = (req, res) => {
  const id = req.params.id;
  const getOneQuery = `SELECT * FROM gas_station_branch WHERE id = ?`;
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

// update gas_station_branch
const updateGasStationBranch = (req, res) => {
  const id = req.params.id;
  const { gas_station_id, name, address, location, phone_number } = req.body;

  const updateQuery = `UPDATE gas_station_branch SET gas_station_id = ?, name = ?, address = ?, location = ?, phone_number = ? WHERE id = ?`;

  db.query(
    updateQuery, 
    [gas_station_id, name, address, location, phone_number, id], 
    (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        message: error.message,
      });
    }

    res.json({
      statusCode: 200,
      message: "a gas_station_branch updated successfully",
      data: result.affectedRows,
    });
  });
};

// delete gas_station_branch
const deleteGasStationBranch = (req, res) => {
  const id = req.params.id;
  const deleteQuery = `DELETE FROM gas_station_branch where id = ?`;
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
  createGasStationBranch,
  getGasStationBranch,
  getOneGasStationBranch,
  updateGasStationBranch,
  deleteGasStationBranch,
};
