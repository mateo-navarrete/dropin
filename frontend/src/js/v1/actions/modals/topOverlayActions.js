import { OPEN_TOP_OVERLAY, CLOSE_TOP_OVERLAY } from '../../constants';

export const openTopOverlay = (coordsId) => {
  // console.log('@osm', );
  return { type: OPEN_TOP_OVERLAY, payload: coordsId };
};

export const closeTopOverlay = () => {
  return { type: CLOSE_TOP_OVERLAY };
};
