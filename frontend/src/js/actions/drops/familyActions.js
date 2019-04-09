import {
  GOT_FAMILY_ERROR,
  GOT_FAMILY_PINS,
  GETTING_FAMILY_PINS
} from '../../constants';
import { getData } from '../../utils';

const gotFamilyError = err => {
  return { type: GOT_FAMILY_ERROR, payload: err };
};

const gotFamilyPins = pins => {
  return { type: GOT_FAMILY_PINS, payload: pins };
};

const gettingFamilyPins = () => {
  return { type: GETTING_FAMILY_PINS };
};

export const getFamilyPins = api => dispatch => {
  dispatch(gettingFamilyPins());
  getData('/api/pins/' + (api || ''), res => {
    res.data.length
      ? dispatch(gotFamilyPins(res.data))
      : dispatch(gotFamilyError(res.data));
  });
};
