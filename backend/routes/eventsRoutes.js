const express = require('express');
const router = express.Router();

const { createEvent, getEvents, updateEvent, deleteEvent } = require('../db/queries/eventsQueries');

router.post('/', createEvent);
router.get('/:id?lat?lon', getEvents);
router.put('/', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
