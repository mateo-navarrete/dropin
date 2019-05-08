const db = require('..');

const uploadVideo = (req, res, next) => {
  const rb = req.body;
  console.log('@rb', rb);
  db.none('INSERT INTO media (blob) VALUES (${data})', rb)
    .then(() => {
      res.send({
        status: 'success',
        message: `uploaded video: ${JSON.stringify(rb)}`,
      });
    })
    .catch(err => next(err));
};

const getVideo = (req, res, next) => {
  db.any('SELECT * FROM media')
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: `got Video`,
      });
    })
    .catch(err => next(err));
};

const createEvent = (req, res, next) => {
  const rb = req.body;
  const duration = {
    1: 15,
    2: 30,
    3: 60,
    4: 120,
  };
  const eventObj = {
    category_id: rb.category_id,
    user_name: rb.user_name,
    latitude: rb.latitude,
    longitude: rb.longitude,
    display_user: rb.display_user,
    event_name: rb.event_name,
    description: rb.description,
    expiration_date: duration[rb.expiration_date],
  };
  db.none(
    "INSERT INTO events (category_id, user_id, latitude, longitude, display_user, event_name, description, expiration_date) VALUES (${category_id}, (SELECT id FROM users WHERE user_name = ${user_name}), ${latitude}, ${longitude}, ${display_user}, ${event_name}, ${description}, now() + INTERVAL '${expiration_date}' MINUTE)",
    eventObj
  )
    .then(() => {
      res.send({
        status: 'success',
        message: `created event: ${JSON.stringify(eventObj)}`,
      });
    })
    .catch(err => next(err));
};

const getUserEvents = (req, res, next) => {
  let user_name = req.params.id;
  db.any(
    `SELECT a.active, h.history
FROM   users u
LEFT   JOIN LATERAL (
   SELECT json_agg(a) AS active
   FROM   (
      SELECT *
      FROM   events e
      WHERE  e.user_id = (
        SELECT id
        FROM users u
        WHERE u.user_name = 'demo'
        AND expiration_date > CURRENT_TIMESTAMP
        )
      ) a
   ) a ON TRUE
LEFT   JOIN LATERAL (
   SELECT json_agg(h) AS history
   FROM   (
      SELECT *
      FROM   events e
      WHERE  e.user_id = (
        SELECT id
        FROM users u
        WHERE u.user_name = 'demo'
        AND expiration_date <= CURRENT_TIMESTAMP
        )
      ) h
   ) h ON TRUE
WHERE u.id = (
    SELECT id
    FROM users u
    WHERE u.user_name = 'demo'
    )`,
    user_name
  )
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: `got user: ${req.params.id} active events and history`,
      });
    })
    .catch(err => {
      console.log('@getUserEvents', err);
      next(err);
    });
};

// const getUserEvents = (req, res, next) => {
//   let user_name = req.params.id;
//   db.any(
//     `SELECT
//     e.*,
//     (SELECT
//         user_name
//     FROM users AS u
//     WHERE e.user_id = u.id) AS user_name
// FROM events e
// JOIN users u
// ON u.id = e.user_id
// WHERE u.user_name=$1
// ORDER BY e.created_date DESC`,
//     user_name
//   )
//     .then(data => {
//       res.send({
//         status: 'success',
//         data: data,
//         message: `got all user events: ${req.params.id}`,
//       });
//     })
//     .catch(err => {
//       console.log('@getUserEvents', err);
//       next(err);
//     });
// };

const getEvents = (req, res, next) => {
  // TODO: byRadius & notPrivate
  db.any(
    `SELECT
    e.*,
    (SELECT
        user_name
    FROM users AS u
    WHERE e.user_id = u.id) AS user_name
FROM events e
JOIN users u
ON u.id = e.user_id
AND expiration_date >= CURRENT_TIMESTAMP
ORDER BY e.created_date DESC`
  )
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: `got all active user events`,
      });
    })
    .catch(err => {
      console.log('@getEvents', err);
      next(err);
    });
};

const getTrendingEvents = (req, res, next) => {
  // TODO: byRadius & notPrivate
  db.any(
    `SELECT
    e.*,
    (SELECT
        user_name
    FROM users AS u
    WHERE e.user_id = u.id) AS user_name
FROM events e
JOIN users u
ON u.id = e.user_id
AND expiration_date >= CURRENT_TIMESTAMP
ORDER BY e.created_date DESC`
  )
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: `got all active events with the most popular tags`,
      });
    })
    .catch(err => {
      console.log('@getEvents', err);
      next(err);
    });
};

const getRecentEvents = (req, res, next) => {
  // TODO: byRadius & notPrivate
  db.any(
    `SELECT
    e.*,
    (SELECT
        user_name
    FROM users AS u
    WHERE e.user_id = u.id) AS user_name
FROM events e
JOIN users u
ON u.id = e.user_id
AND expiration_date >= CURRENT_TIMESTAMP
AND e.created_date >= CURRENT_TIMESTAMP - INTERVAL '30' MINUTE
ORDER BY e.created_date DESC`
  )
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: `got all active events created within the past 30mins`,
      });
    })
    .catch(err => {
      console.log('@getEvents', err);
      next(err);
    });
};

const getExpiringEvents = (req, res, next) => {
  // TODO: byRadius & notPrivate
  db.any(
    `SELECT
    e.*,
    (SELECT
        user_name
    FROM users AS u
    WHERE e.user_id = u.id) AS user_name
FROM events e
JOIN users u
ON u.id = e.user_id
AND expiration_date >= CURRENT_TIMESTAMP
AND expiration_date <= CURRENT_TIMESTAMP + INTERVAL '30' MINUTE
ORDER BY expiration_date DESC`
  )
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: `got all active events expiring within the next 30mins`,
      });
    })
    .catch(err => {
      console.log('@getEvents', err);
      next(err);
    });
};

// const getEvents = (req, res, next) => {
//   db.any(
//     `SELECT *,
//     (SELECT
//         user_name
//     FROM users AS u
//     WHERE events.user_id = u.id) AS user_name
//     FROM events
//     WHERE category_id=$1
//     AND expiration_date >= CURRENT_TIMESTAMP`,
//     +req.params.id
//   )
//     .then(data => {
//       res.send({
//         status: 'success',
//         data: data,
//         message: `got all events in category: ${req.params.id}`,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       next(err);
//     });
// };

const updateEvent = (req, res, next) => {
  const rb = req.body;
  const eventObj = {
    id: rb.id,
    category_id: rb.category_id,
    display_user: rb.display_user,
    event_name: rb.event_name,
    description: rb.description || '',
  };
  db.none(
    'UPDATE events SET category_id=${category_id}, display_user=${display_user}, event_name=${event_name}, description=${description} WHERE id=${id}',
    eventObj
  )
    .then(() => {
      res.send({
        status: 'success',
        message: `updated event: ${JSON.stringify(eventObj)}`,
      });
    })
    .catch(err => next(err));
};

const deleteEvent = (req, res, next) => {
  db.none('DELETE FROM events WHERE id=$1', +req.params.id)
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: `deleted event: ${req.params.id}`,
      });
    })
    .catch(err => next(err));
};

module.exports = {
  createEvent,
  getUserEvents,
  getEvents,
  getTrendingEvents,
  getRecentEvents,
  getExpiringEvents,
  updateEvent,
  deleteEvent,
  uploadVideo,
  getVideo,
};

// TODO:
// Get Events via category_id & latitude & longitude radius
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
