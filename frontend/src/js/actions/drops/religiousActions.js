import {
  GOT_RELIGIOUS_ERROR,
  GOT_RELIGIOUS_PINS,
  GETTING_RELIGIOUS_PINS
} from '../../constants';
import { getData } from '../../utils';

const gotReligiousError = err => {
  return { type: GOT_RELIGIOUS_ERROR, payload: err };
};

const gotReligiousPins = pins => {
  return { type: GOT_RELIGIOUS_PINS, payload: pins };
};

const gettingReligiousPins = () => {
  return { type: GETTING_RELIGIOUS_PINS };
};

export const getReligiousPins = api => dispatch => {
  dispatch(gettingReligiousPins());
  getData('/api/pins/' + (api || ''), res => {
    res.data.length
      ? dispatch(gotReligiousPins(res.data))
      : dispatch(gotReligiousError(res.data));
  });
};
