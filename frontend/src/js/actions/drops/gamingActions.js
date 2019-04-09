import {
  GOT_GAMING_ERROR,
  GOT_GAMING_PINS,
  GETTING_GAMING_PINS
} from '../../constants';
import { getData } from '../../utils';

const gotGamingError = err => {
  return { type: GOT_GAMING_ERROR, payload: err };
};

const gotGamingPins = pins => {
  return { type: GOT_GAMING_PINS, payload: pins };
};

const gettingGamingPins = () => {
  return { type: GETTING_GAMING_PINS };
};

export const getGamingPins = api => dispatch => {
  dispatch(gettingGamingPins());
  getData('/api/pins/' + (api || ''), res => {
    res.data.length
      ? dispatch(gotGamingPins(res.data))
      : dispatch(gotGamingError(res.data));
  });
};
