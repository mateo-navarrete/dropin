//jscs:disable requireShorthandArrowFunctions
import { UPDATE_DIMENSIONS } from '../../constants';
import { getDimensions } from '../../utils';

const updateDimensions = dimensions => {
  return {
    type: UPDATE_DIMENSIONS,
    payload: dimensions,
  };
};

export const resizeDimensions = () => dispatch => {
  let dimensions = getDimensions();
  dispatch(updateDimensions(dimensions));
};
