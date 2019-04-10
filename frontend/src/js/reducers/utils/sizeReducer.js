import { UPDATE_SIZE } from '../../constants';

const initState = {
  height: 0,
  marginLeft: 0,
  size: 0,
  width: 0,
  adjWidth: 0,
  pinsH: 0,
  dropsH: 0,
  droppersH: 0,
  overlayHeight: 0,
  overlayWidth: 0,
  mainHeight: 0,
  mainWidth: 0,
  navBarHeight: 0,
  navBarWidth: 0,
  actionBarHeight: 0,
  actionBarWidth: 0,
};

export const sizeReducer = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case UPDATE_SIZE:
      const {
        height,
        marginLeft,
        size,
        width,
        adjWidth,
        pinsH,
        dropsH,
        droppersH,
        overlayHeight,
        overlayWidth,
        mainHeight,
        mainWidth,
        navBarHeight,
        navBarWidth,
        actionBarHeight,
        actionBarWidth,
      } = action.payload;
      // console.log('@', action.payload);
      nextState = {
        ...state,
        height: height,
        marginLeft: marginLeft,
        size: size,
        width: width,
        adjWidth: adjWidth,
        pinsH: pinsH,
        dropsH: dropsH,
        droppersH: droppersH,
        overlayHeight: overlayHeight,
        overlayWidth: overlayWidth,
        mainHeight: mainHeight,
        mainWidth: mainWidth,
        navBarHeight: navBarHeight,
        navBarWidth: navBarWidth,
        actionBarHeight: actionBarHeight,
        actionBarWidth: actionBarWidth,
      };
      return nextState;
    default:
      return state;
  }
};
