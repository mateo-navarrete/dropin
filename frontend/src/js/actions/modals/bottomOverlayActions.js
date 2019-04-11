import { OPEN_BOTTOM_OVERLAY,
CLOSE_BOTTOM_OVERLAY,  } from '../../constants';

export const openBottomOverlay = value => {
  // console.log('@osm', value);
  return { type: OPEN_BOTTOM_OVERLAY, payload: value };
};

export const closeBottomOverlay = () => {
  return { type: CLOSE_BOTTOM_OVERLAY };
};
