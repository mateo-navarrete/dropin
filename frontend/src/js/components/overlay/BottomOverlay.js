import React from 'react';
import { postData } from '../../utils';
import { StyledEventStepper } from '..';
import {SigninPage} from "../droppers";
const api = '/api/events';
const config = {
  category_id: 1,
  user_id: 1,
  latitude: 40.743,
  longitude: -73.935,
  display_user: true,
  event_name: 'redux testing',
  description: 'cool desc here',
  expiration_date: '2019-04-09 10:27:29.247613',
};

export const BottomOverlay = props => {
  const myButton = (
    <button
      className="stepper-modal-close-button"
      onClick={props.closeBottomOverlay}
    >
      Close Me
    </button>
  );
  console.log('@bo', props);
  return (
    <div style={{ position: 'relative' }}>
      <div
        className="bottom-overlay"
        style={{
          bottom: props.visible ? 0 : -+`${props.height}`,
          // display: props.visible ? 'block' : 'none',
        }}
      >
        BottomOverlay
        <button
          className="stepper-modal-close-button"
          onClick={() => postData(api, config, console.log)}
        >
          Create Event
        </button>
        {myButton}
        <SigninPage />
      </div>
    </div>
  );
};

//<StyledEventStepper />
