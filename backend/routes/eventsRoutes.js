const express = require('express');
const router = express.Router();

const {
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
} = require('../db/queries/eventsQueries');

router.post('/', createEvent);
router.get('/user/:username', getUserEvents);
// TODO: byRadius & notPrivate
router.get('/', getEvents);
router.get('/trending', getTrendingEvents);
router.get('/recent', getRecentEvents);
router.get('/expiring', getExpiringEvents);
//
router.put('/', updateEvent);
router.delete('/:id', deleteEvent);
router.post('/upload', uploadVideo);
router.get('/upload', getVideo);

module.exports = router;

// getEvents/tags/:geolocation&:tag
//
// getEvents/favorites/:user_name // json => users: [ … ] tags: [ … ]
//
// getEvents/user/:user_name // json => active: [ … ] .history: [ … ]
