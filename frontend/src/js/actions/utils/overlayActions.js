import {
  HIDE_BOTTOM_OVERLAY,
  HIDE_TOP_OVERLAY,
  SHOW_BOTTOM_OVERLAY,
  SHOW_TOP_OVERLAY
} from '../../constants';

export const hideBottomOverlay = () => {
  return { type: HIDE_BOTTOM_OVERLAY };
};

export const hideTopOverlay = () => {
  return { type: HIDE_TOP_OVERLAY };
};

export const showBottomOverlay = () => {
  return { type: SHOW_BOTTOM_OVERLAY };
};

export const showTopOverlay = eventID => {
  return { type: SHOW_TOP_OVERLAY, payload: eventID };
};
