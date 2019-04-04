// import { AUTH_ERROR, AUTH_USER, AUTHORIZE_USER } from '../constants';

const initState = {
  drops: [
    { type: 'Music' },
    { type: 'Sports' },
    { type: 'Religious' },
    { type: 'Gaming' },
    { type: 'Education' },
    { type: 'Entertainment' },
    { type: 'Humanitarian' },
    { type: 'Party' },
    { type: 'Food' },
    { type: 'Family' },
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
