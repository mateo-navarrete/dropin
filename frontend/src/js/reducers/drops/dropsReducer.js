// import { AUTH_ERROR, AUTH_USER, AUTHORIZE_USER } from '../constants';

const initState = {
  drops: [
    { type: 'Education' },
    { type: 'Entertainment' },
    { type: 'Family' },
    { type: 'Food' },
    { type: 'Gaming' },
    { type: 'Humanitarian' },
    { type: 'Music' },
    { type: 'Party' },
    { type: 'Religious' },
    { type: 'Sports' },
  ], //[],
  types: [],
};

export const dropsReducer = (state = initState, action) => {
  // let nextState;
  switch (action.type) {
    default:
      return state;
  }
};
