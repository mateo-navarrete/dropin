import { UPDATE_SIZES } from '../../constants';
import { getAreaSizes } from '../../utils';

const updateSizes = sizes => {
  return {
    type: UPDATE_SIZES,
    payload: sizes,
  };
};

export const getResize = () => dispatch => {
  let areaSizes = getAreaSizes();
  dispatch(updateSizes(areaSizes));
};
