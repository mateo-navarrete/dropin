import { UPDATE_SIZES } from '../../constants';

const initState = {
  height: 0,
  width: 0,
  mainHeight: 0,
  navBarHeight: 0,
  actionBarHeight: 0,
};

export const areaSizeReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case UPDATE_SIZES:
      const {
        height,
        width,
        mainHeight,
        navBarHeight,
        actionBarHeight,
      } = action.payload;
      nextState = {
        ...state,
        height: height,
        width: width,
        mainHeight: mainHeight,
        navBarHeight: navBarHeight,
        actionBarHeight: actionBarHeight,
      };
      return nextState;
    default:
      return state;
  }
};
