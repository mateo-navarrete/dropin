import {
  GET_CATEGORY_EVENTS,
  GOT_EVENTS_ERROR,
  GOT_FAMILY_EVENTS,
  GOT_PARTY_EVENTS,
  GOT_SPORTS_EVENTS
} from '../../constants';

const initState = {
  category: 'family',
  family: { id: 1, name: 'family' },
  party: { id: 2, name: 'party' },
  sports: { id: 3, name: 'sports' },
  categories: [
    { id: 1, name: 'family' },
    { id: 2, name: 'party' },
    { id: 3, name: 'sports' },
  ],
  familyEvents: [],
  partyEvents: [],
  sportsEvents: [],
  loading: false,
};

export const eventsReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GET_CATEGORY_EVENTS:
      nextState = {
        ...state,
        loading: true,
        category: action.payload,
      };
      return nextState;
    case GOT_EVENTS_ERROR:
      nextState = { ...state, loading: false };
      return nextState;
    case GOT_FAMILY_EVENTS:
      nextState = {
        ...state,
        loading: false,
        familyEvents: action.payload,
      };
      return nextState;
    case GOT_PARTY_EVENTS:
      nextState = {
        ...state,
        loading: false,
        partyEvents: action.payload,
      };
      return nextState;
    case GOT_SPORTS_EVENTS:
      nextState = {
        ...state,
        loading: false,
        sportsEvents: action.payload,
      };
      return nextState;
    default:
      return state;
  }
};
