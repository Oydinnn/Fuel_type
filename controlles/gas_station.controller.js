const db = require("../config/db.config");

// post gas station
const createGasStation = (req, res) =>{
  const { name } = req.body;
  db.query(
    `INSERT INTO gas_station (name) VALUES (?)`,
    [name],
    (error, results) =>{
      if(error){
        return res.status(500).json({
          message: error.message
        });
      }
      res.status(201).json({
        statusCode: 201,
        message: "New Gas Station added",
        id: results.insertId,
      })
    });
  };

// get gas station 
const getGasStation = (req, res) =>{
  const getQuery = `SELECT * FROM gas_station`;
  db.query(getQuery, (error, result) =>{
    if(error){
      return res.status(500).json({
        message: error.message
      });
    }
    res.status(200).json({
      statusCode: 200,
      message: 'gas station retrieved successfully',
      data: result
    });
  });
};

// get one gas station
const getOneGasStation = (req, res)=>{
  const id = req.params.id;
  const getOneQuery=`SELECT * FROM gas_station WHERE id = ?`;
  db.query(getOneQuery, [id], (error, result) =>{
    if(error){
      return res.status(500).json({
        message: error.message,
      });
    };
    if(!result.length){
      return res.status(404).json({message: "A gas station not found",
      });
    }

    res.json({
      statusCode: 200,
      message: 'a gas station retrieved successfully',
      data: result[0],
    });
  });
};

// update gas station

const updateGasStation = (req, res)=>{
  const id = req.params.id;
  const { name } = req.body;

  const updateQuery = `UPDATE gas_station SET name = ? WHERE id = ?`;

  db.query(updateQuery, [name, id], (error, result)=>{
    if(error){
      return res.status(500).json({
        message: error.message,
      });
    }
    res.json({
      statusCode: 200,
      message: 'a gas station updated succesfully',
      data: result.affectedRows,
    });
  });
};

// delete gas station
const deleteGasStation = (req, res)=>{
  const id = req.params.id;
  const deleteQuery = `DELETE FROM gas_station WHERE id = ?`;
  db.query(deleteQuery, [id], (error, result)=>{
    if(error){
      return res.status(500).json({
        message: error.message,
      })
    }

    res.json({
      statusCode: 200, 
      message: 'a gas station deleted successfully',
      data: result.affectedRows,
    })
  })
};

module.exports = {
  createGasStation, getGasStation, getOneGasStation, updateGasStation, deleteGasStation
};