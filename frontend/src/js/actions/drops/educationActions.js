import {
  GOT_EDUCATION_ERROR,
  GOT_EDUCATION_PINS,
  GETTING_EDUCATION_PINS
} from '../../constants';
import { getData } from '../../utils';

const gotEducationError = err => {
  return { type: GOT_EDUCATION_ERROR, payload: err };
};

const gotEducationPins = pins => {
  return { type: GOT_EDUCATION_PINS, payload: pins };
};

const gettingEducationPins = () => {
  return { type: GETTING_EDUCATION_PINS };
};

export const getEducationPins = api => dispatch => {
  dispatch(gettingEducationPins());
  getData('/api/events/' + (api || ''), res => {
    res.data.length
      ? dispatch(gotEducationPins(res.data))
      : dispatch(gotEducationError(res.data));
  });
};
