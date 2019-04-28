import React, { Fragment as F } from 'react';
import { CompactLoggedInView, DefaultLoggedOutView } from '.';

export const DefaultAuthStatusView = ({ isLoggedIn, ...props }) => {
  const renderUserStatus = isLoggedIn ? (
    <CompactLoggedInView {...props} />
  ) : (
    <DefaultLoggedOutView {...props} />
  );
  return <F>{renderUserStatus}</F>;
};
