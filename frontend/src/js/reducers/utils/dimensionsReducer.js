import { UPDATE_DIMENSIONS } from '../../constants';

const initState = {
  height: 0,
  width: 0,
  headerHeight: 0,
  mainHeight: 0,
  footerHeight: 0,
};

export const dimensionsReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case UPDATE_DIMENSIONS:
      let ap = action.payload;
      nextState = {
        ...state,
        height: ap.height,
        width: ap.width,
        headerHeight: ap.headerHeight,
        mainHeight: ap.mainHeight,
        footerHeight: ap.footerHeight,
      };
      return nextState;
    default:
      return state;
  }
};
