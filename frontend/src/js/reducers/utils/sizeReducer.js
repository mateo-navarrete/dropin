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
      };
      return nextState;
    default:
      return state;
  }
};
