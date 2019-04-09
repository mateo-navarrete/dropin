import {
  GOT_PARTY_ERROR,
  GOT_PARTY_PINS,
  GETTING_PARTY_PINS
} from '../../constants';
import { getData } from '../../utils';

const gotPartyError = err => {
  return { type: GOT_PARTY_ERROR, payload: err };
};

const gotPartyPins = pins => {
  return { type: GOT_PARTY_PINS, payload: pins };
};

const gettingPartyPins = () => {
  return { type: GETTING_PARTY_PINS };
};

export const getPartyPins = api => dispatch => {
  dispatch(gettingPartyPins());
  getData('/api/pins/' + (api || ''), res => {
    res.data.length
      ? dispatch(gotPartyPins(res.data))
      : dispatch(gotPartyError(res.data));
  });
};
