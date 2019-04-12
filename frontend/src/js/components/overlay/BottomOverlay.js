import React from 'react';
import { postData } from '../../utils';
import { StyledEventStepper } from '..';
// import { SigninPage } from '../droppers';
import { OverlayArea } from '.';
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
  const closeButton = (
    <button
      className="stepper-modal-close-button"
      onClick={props.closeBottomOverlay}
    >
      Close Me
    </button>
  );
  const eventButton = (
    <button
      className="stepper-modal-close-button"
      onClick={() => postData(api, config, console.log)}
    >
      Create Event
    </button>
  );
  console.log('@bo', props);
  return (
    <div style={{ position: 'relative' }}>
      <div
        className="bottom-overlay"
        style={{
          bottom: props.bottomOverlayVisible ? 0 : -+`${props.height}`,
          // display: props.visible ? 'block' : 'none',
        }}
      >
        {props.isLoggedIn ? (
          <StyledEventStepper closeBottomOverlay={props.closeBottomOverlay} />
        ) : (
          <OverlayArea />
        )}
      </div>
    </div>
  );
};

// {eventButton}// {closeButton}
