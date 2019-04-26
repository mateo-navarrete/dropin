import React from 'react';
import { withAreaSizes, withOverlay, withEvents } from '../../containers';
import { EventDetails, UserEvents } from '..';
import '../../../styles/overlay.css';

const Overlay = props => {
  const {
    bottomOverlay,
    topOverlay,
    height,
    width,
    hideBottomOverlay,
    hideTopOverlay,
    getAddress
  } = props;

  return (
    <div>
      <div
        className="overlay-area"
        style={{ top: topOverlay ? 0 : -+`${height}` }}
      >
        <EventDetails
          height={height}
          width={width}
          topOverlay={topOverlay}
          hideTopOverlay={hideTopOverlay}
          getAddress={getAddress}
        />
      </div>
      <div
        className="overlay-area"
        style={{ bottom: bottomOverlay ? 0 : -+`${height}` }}
      >
        <UserEvents
          height={height}
          width={width}
          bottomOverlay={bottomOverlay}
          hideBottomOverlay={hideBottomOverlay}
        />
      </div>
    </div>
  );
};

export const OverlayArea = withAreaSizes(withEvents(withOverlay(Overlay)));
