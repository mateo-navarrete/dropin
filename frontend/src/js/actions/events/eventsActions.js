/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
/* eslint-disable no-unused-vars */

import {
  GET_CATEGORY_EVENTS,
  GOT_EVENTS_ERROR,
  GOT_FAMILY_EVENTS,
  GOT_PARTY_EVENTS,
  GOT_SPORTS_EVENTS,
  SET_LOADED_TO_FALSE,
  GET_ADDRESS
} from "../../constants";
import { getData } from "../../utils";
import Geocode from "react-geocode";

export const setLoadedToFalse = () => {
  return { type: SET_LOADED_TO_FALSE };
};

const getCategoryEvents = category => {
  return { type: GET_CATEGORY_EVENTS, payload: category };
};

const gotEventsError = err => {
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

const get_address = address => {
  return { type: GET_ADDRESS, payload: address };
};

const EVENTS = {
  got_familyEvents,
  got_partyEvents,
  got_sportsEvents
};

export const getEvents = ({ id, name }) => dispatch => {
  let gotEvent = EVENTS["got_" + name + "Events"];
  dispatch(getCategoryEvents(name));
  getData("/api/events/" + (id || ""), res => {
    res.data.length
      ? dispatch(gotEvent(res.data))
      : dispatch(gotEventsError(res.data));
  });
};

export const getAddress = (latitude, longitude) => dispatch => {
  Geocode.setApiKey("AIzaSyB5uKfMriNA73mQgW_ZRelAixBLEdqT-Xg");
  Geocode.fromLatLng(`${latitude}`, `${longitude}`).then(
    response => {
      let address = response.results[0].formatted_address;
      dispatch(get_address(address));
    },
    error => {
      console.error(error);
    }
  );
};
