import React, { Fragment as F } from 'react';
import { LoggedInView, CompactLoggedOutView } from '.';

export const CompactAuthStatusView = ({ isLoggedIn, ...props }) => {
  const renderUserStatus = isLoggedIn ? (
    <LoggedInView {...props} />
  ) : (
    <CompactLoggedOutView {...props} />
  );
  return <F>{renderUserStatus}</F>;
};
