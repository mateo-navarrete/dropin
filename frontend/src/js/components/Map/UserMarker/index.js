//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { EventMarker } from '../../EventMarker';

export const UserMarker = ({ isMarkerShown, ...props }) => {
  const renderView =
    isMarkerShown && props.position.lat ? (
      <EventMarker {...props} isUserMarker />
    ) : (
      ''
    );
  return <F>{renderView}</F>;
};
