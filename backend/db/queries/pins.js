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

/*

SELECT * WHERE
latitude|longitude < req.body.long + 100
AND
latitude|longitude > req.body.long - 100
AND
drop_id = $1
etc

SELECT
    id, (
      3959 * acos (
      cos ( radians(78.3232) )
      * cos( radians( lat ) )
      * cos( radians( lng ) - radians(65.3234) )
      + sin ( radians(78.3232) )
      * sin( radians( lat ) )
    )
) AS distance
FROM markers
HAVING distance < 30
ORDER BY distance
LIMIT 0 , 20;
*/
