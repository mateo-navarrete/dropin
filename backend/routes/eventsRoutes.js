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
} = require('../db/queries/eventsQueries');

router.post('/', createEvent);
router.get('/user/:user_name', getUserEvents);
// TODO: byRadius & notPrivate
router.get('/', getEvents);
router.get('/trending', getTrendingEvents);
router.get('/recent', getRecentEvents);
router.get('/expiring', getExpiringEvents);
//
router.put('/', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;

// getEvents/tags/:geolocation&:tag
//
// getEvents/favorites/:user_name // json => users: [ … ] tags: [ … ]
//
// getEvents/user/:user_name // json => active: [ … ] .history: [ … ]
