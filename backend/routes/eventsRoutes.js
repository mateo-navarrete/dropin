const express = require('express');
const router = express.Router();

const {
  createEvent,
  getUserEvents,
  getEvents,
  updateEvent,
  deleteEvent,
} = require('../db/queries/eventsQueries');

router.post('/', createEvent);
router.get('/user/:id', getUserEvents);
// TODO: byRadius & notPrivate
router.get('/', getEvents);
// router.get('/:id', getEvents);
router.put('/', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
