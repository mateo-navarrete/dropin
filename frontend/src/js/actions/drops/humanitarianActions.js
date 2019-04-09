import {
  GOT_HUMANITARIAN_ERROR,
  GOT_HUMANITARIAN_PINS,
  GETTING_HUMANITARIAN_PINS
} from '../../constants';
import { getData } from '../../utils';

const gotHumanitarianError = err => {
  return { type: GOT_HUMANITARIAN_ERROR, payload: err };
};

const gotHumanitarianPins = pins => {
  return { type: GOT_HUMANITARIAN_PINS, payload: pins };
};

const gettingHumanitarianPins = () => {
  return { type: GETTING_HUMANITARIAN_PINS };
};

export const getHumanitarianPins = api => dispatch => {
  dispatch(gettingHumanitarianPins());
  getData('/api/pins/' + (api || ''), res => {
    res.data.length
      ? dispatch(gotHumanitarianPins(res.data))
      : dispatch(gotHumanitarianError(res.data));
  });
};
