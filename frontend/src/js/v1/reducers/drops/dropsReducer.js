import { GOT_FAMILY_PINS, GOT_PARTY_PINS, GOT_SPORTS_PINS } from '../../constants';

const initState = {
  drops: [
    // { type: 'Education' },
    // { type: 'Entertainment' },
    { type: 'Family', eventId: 1 },
    // { type: 'Food' },
    // { type: 'Gaming' },
    // { type: 'Humanitarian' },
    // { type: 'Music' },
    { type: 'Party', eventId: 2 },
    // { type: 'Religious' },
    { type: 'Sports', eventId: 3 },
  ], //[],
  types: [],
  eventId: 0,
  drop: '',
};

export const dropsReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case GOT_FAMILY_PINS:
      nextState = { ...state, eventId: 1, drop: 'family' };
      return nextState;
    case GOT_PARTY_PINS:
      nextState = { ...state, eventId: 2, drop: 'party' };
      return nextState;
    case GOT_SPORTS_PINS:
      nextState = { ...state, eventId: 3, drop: 'sports' };
      return nextState;
    default:
      return state;
  }
};
