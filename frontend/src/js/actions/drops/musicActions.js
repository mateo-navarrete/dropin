import {
  GOT_MUSIC_ERROR,
  GOT_MUSIC_PINS,
  GETTING_MUSIC_PINS
} from '../../constants';
import { getData } from '../../utils';

const gotMusicError = err => {
  return { type: GOT_MUSIC_ERROR, payload: err };
};

const gotMusicPins = pins => {
  return { type: GOT_MUSIC_PINS, payload: pins };
};

const gettingMusicPins = () => {
  return { type: GETTING_MUSIC_PINS };
};

export const getMusicPins = api => dispatch => {
  dispatch(gettingMusicPins());
  getData('/api/pins/' + (api || ''), res => {
    res.data.length
      ? dispatch(gotMusicPins(res.data))
      : dispatch(gotMusicError(res.data));
  });
};
