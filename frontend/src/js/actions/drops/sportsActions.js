import {
  GOT_SPORTS_ERROR,
  GOT_SPORTS_PINS,
  GETTING_SPORTS_PINS
} from '../../constants';
import { getData } from '../../utils';

const gotSportsError = err => {
  return { type: GOT_SPORTS_ERROR, payload: err };
};

const gotSportsPins = pins => {
  return { type: GOT_SPORTS_PINS, payload: pins };
};

const gettingSportsPins = () => {
  return { type: GETTING_SPORTS_PINS };
};

export const getSportsEvents = api => dispatch => {
  dispatch(gettingSportsPins());
  getData('/api/events/' + (api || ''), res => {
    res.data.length
      ? dispatch(gotSportsPins(res.data))
      : dispatch(gotSportsError(res.data));
  });
};
