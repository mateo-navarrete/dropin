/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
/* eslint-disable no-unused-vars */

import {
  GET_CATEGORY_EVENTS,
  GOT_EVENTS_ERROR,
  GOT_FAMILY_EVENTS,
  GOT_PARTY_EVENTS,
  GOT_SPORTS_EVENTS,
  SET_LOADED_TO_FALSE
} from '../../constants';
import { getData } from '../../utils';

export const setLoadedToFalse = ()=>{
  return {type: SET_LOADED_TO_FALSE}
}

const getCategoryEvents = category => {
  console.log('@get',category)
  return { type: GET_CATEGORY_EVENTS, payload: category };
};

const gotEventsError = err => {
  console.log('@eventsErr', err);
  return { type: GOT_EVENTS_ERROR, payload: err };
};

const got_familyEvents = events => {
  return { type: GOT_FAMILY_EVENTS, payload: events };
};

const got_partyEvents = events => {
  return { type: GOT_PARTY_EVENTS, payload: events };
};

const got_sportsEvents = events => {
  return { type: GOT_SPORTS_EVENTS, payload: events };
};

const EVENTS = {
  got_familyEvents,
  got_partyEvents,
  got_sportsEvents,
};

export const getEvents = ({ id, name }) => dispatch => {
  let gotEvent = EVENTS['got_' + name + 'Events'];
  dispatch(getCategoryEvents(name));
  getData('/api/events/' + (id || ''), res => {
    res.data.length
      ? dispatch(gotEvent(res.data))
      : dispatch(gotEventsError(res.data));
  });
};
