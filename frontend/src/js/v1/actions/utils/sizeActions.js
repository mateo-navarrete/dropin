import { UPDATE_SIZE } from '../../constants';
import { getSizes } from '../../utils';

const updateSize = size => {
  return {
    type: UPDATE_SIZE,
    payload: size,
  };
};

export const getSize = () => dispatch => {
  let gotSize = getSizes();
  dispatch(updateSize(gotSize));
};
