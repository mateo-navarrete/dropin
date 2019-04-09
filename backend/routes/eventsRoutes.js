const express = require('express');
const router = express.Router();

const { createEvent, getEvents } = require('../db/queries/eventsQueries');

router.post('/', createEvent);
router.get('/:id', getEvents);

module.exports = router;
