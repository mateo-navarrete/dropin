import React, { Fragment as F } from 'react';
import { CompactLoggedOutView, DefaultLoggedOutView } from '.';

export const LoggedOutView = ({ height, width, ...props }) => {
  let isCompact = height > width;
  const renderView = isCompact ? (
    <CompactLoggedOutView {...props} />
  ) : (
    <DefaultLoggedOutView {...props} />
  );
  return <F>{renderView}</F>;
};
