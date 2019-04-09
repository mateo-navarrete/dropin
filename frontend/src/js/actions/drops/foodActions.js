import {
  GOT_FOOD_ERROR,
  GOT_FOOD_PINS,
  GETTING_FOOD_PINS
} from '../../constants';
import { getData } from '../../utils';

const gotFoodError = err => {
  return { type: GOT_FOOD_ERROR, payload: err };
};

const gotFoodPins = pins => {
  return { type: GOT_FOOD_PINS, payload: pins };
};

const gettingFoodPins = () => {
  return { type: GETTING_FOOD_PINS };
};

export const getFoodPins = api => dispatch => {
  dispatch(gettingFoodPins());
  getData('/api/pins/' + (api || ''), res => {
    res.data.length
      ? dispatch(gotFoodPins(res.data))
      : dispatch(gotFoodError(res.data));
  });
};
