const { db } = require('../index.js');
  
function getAllPins(req, res, next) {
    db.any('select * from events')
      .then(function (data) {
        res.send({
          status: 'success',
          data: data,
          message: 'Retrieved All Pins'
        });
      })
      .catch(function (err) {
        console.log(err)
      });
}
  
function getOnePin(req, res, next) {
    db.any(`select * from events where id = ${req.body.id}`)
      .then(function (data) {
        res.send({
          status: 'success',
          data: data,
          message: 'Retrieved Drop'
        });
      })
      .catch(function (err) {
        console.log(err)
      });
}

function getAllUserPins(req, res, next) {
    db.any(`select * from events where user_id = ${req.body.userId}`)
      .then(function (data) {
        res.send({
          status: 'success',
          data: data,
          message: 'Here are the drops from the user you requested'
        });
      })
      .catch(function (err) {
        console.log(err)
      });
}


module.exports ={
    getAllPins,
    getOnePin,
    getAllUserPins
}