import React, { Fragment as F } from 'react';
import { CompactUserStatusView, DefaultUserStatusView } from '.';
import { withDimensions } from '../../containers';

const Wrapper = ({ height, width, isLoggedIn, ...props }) => {
  let isCompact = height > width;
  const renderView = isCompact ? (
    <CompactUserStatusView isLoggedIn={isLoggedIn} />
  ) : (
    <DefaultUserStatusView isLoggedIn={isLoggedIn} />
  );
  return <F>{renderView}</F>;
};

export const UserStatusView = withDimensions(Wrapper);
