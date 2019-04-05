const { db } = require('../index.js');
  
function getAllDrops(req, res, next) {
    db.any('select * from drops')
      .then(function (data) {
        res.send({
          status: 'success',
          data: data,
          message: 'Retrieved All Drops'
        });
      })
      .catch(function (err) {
        console.log(err)
      });
}
  
function getOneDrop(req, res, next) {
    db.any(`select * from drops where id = ${req.body.id}`)
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
    getAllDrops,
    getOneDrop
}