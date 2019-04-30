import React, { Fragment as F } from 'react';
import { CompactLoggedOut } from './CompactLoggedOut';
import { DefaultLoggedOut } from './DefaultLoggedOut';

export const LoggedOut = ({ height, width, ...props }) => {
  let isCompact = height > width;
  const renderView = isCompact ? (
    <CompactLoggedOut {...props} />
  ) : (
    <DefaultLoggedOut {...props} />
  );
  return <F>{renderView}</F>;
};
