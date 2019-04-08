const db = require('..');

const getPins = (req, res, next) => {
  db.any('SELECT * FROM pins WHERE drop_id=$1', +req.params.id)
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: 'get all pins',
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getPins,
};
