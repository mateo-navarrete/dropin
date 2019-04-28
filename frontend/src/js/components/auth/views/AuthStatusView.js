import React, { Fragment as F } from 'react';
import { CompactAuthStatusView, DefaultAuthStatusView } from '.';
import { withDimensions } from '../../../containers';

const Wrapper = ({ height, width, isLoggedIn, ...props }) => {
  let isCompact = height > width;
  const renderView = isCompact ? (
    <CompactAuthStatusView isLoggedIn={isLoggedIn} />
  ) : (
    <DefaultAuthStatusView isLoggedIn={isLoggedIn} />
  );
  return <F>{renderView}</F>;
};

export const AuthStatusView = withDimensions(Wrapper);
