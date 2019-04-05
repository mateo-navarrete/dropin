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

module.exports ={
    getAllPins,
    getOnePin
}