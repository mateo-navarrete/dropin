import {
  GET_CATEGORY_EVENTS,
  GOT_EVENTS_ERROR,
  GOT_FAMILY_EVENTS,
  GOT_PARTY_EVENTS,
  GOT_SPORTS_EVENTS,
  SHOW_TOP_OVERLAY,
  SET_LOADED_TO_FALSE,
  GET_ADDRESS
} from "../../constants";

const initState = {
  category: "family",
  //TODO
  family: { id: 1, name: "family" },
  party: { id: 2, name: "party" },
  sports: { id: 3, name: "sports" },
  //TODO
  categories: [
    { id: 1, name: "family" },
    { id: 2, name: "party" },
    { id: 3, name: "sports" }
  ],
  eventID: 0,
  familyEvents: [],
  partyEvents: [],
  sportsEvents: [],
  loading: false,
  loaded: false,
  address: ""
};

export const eventsReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GET_CATEGORY_EVENTS:
      nextState = {
        ...state,
        loading: true,
        loaded: false,
        category: action.payload
      };
      return nextState;
    case GOT_EVENTS_ERROR:
      nextState = { ...state, loading: false, loaded: true };
      return nextState;
    case GOT_FAMILY_EVENTS:
      nextState = {
        ...state,
        loading: false,
        familyEvents: action.payload,
        partyEvents: [],
        sportsEvents: [],
        loaded: true
      };
      return nextState;
    case GOT_PARTY_EVENTS:
      nextState = {
        ...state,
        loading: false,
        partyEvents: action.payload,
        sportsEvents: [],
        familyEvents: [],
        loaded: true
      };
      return nextState;
    case GOT_SPORTS_EVENTS:
      nextState = {
        ...state,
        loading: false,
        partyEvents: [],
        sportsEvents: action.payload,
        familyEvents: [],
        loaded: true
      };
      return nextState;
    case SHOW_TOP_OVERLAY:
      nextState = { ...state, eventID: action.payload };
      return nextState;
    case SET_LOADED_TO_FALSE:
      nextState = { ...state, loaded: false };
      return nextState;
    case GET_ADDRESS:
      nextState = { ...state, address: action.payload };
      return nextState;
    default:
      return state;
  }
};
