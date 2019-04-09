import {
  GOT_ENTERTAINMENT_ERROR,
  GOT_ENTERTAINMENT_PINS,
  GETTING_ENTERTAINMENT_PINS
} from '../../constants';
import { getData } from '../../utils';

const gotEntertainmentError = err => {
  return { type: GOT_ENTERTAINMENT_ERROR, payload: err };
};

const gotEntertainmentPins = pins => {
  return { type: GOT_ENTERTAINMENT_PINS, payload: pins };
};

const gettingEntertainmentPins = () => {
  return { type: GETTING_ENTERTAINMENT_PINS };
};

export const getEntertainmentPins = api => dispatch => {
  dispatch(gettingEntertainmentPins());
  getData('/api/pins/' + (api || ''), res => {
    res.data.length
      ? dispatch(gotEntertainmentPins(res.data))
      : dispatch(gotEntertainmentError(res.data));
  });
};
