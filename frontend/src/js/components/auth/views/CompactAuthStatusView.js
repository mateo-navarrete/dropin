import React, { Fragment as F } from 'react';
import { CompactLoggedInView, CompactLoggedOutView } from '.';

export const CompactAuthStatusView = ({ isLoggedIn, ...props }) => {
  const renderUserStatus = isLoggedIn ? (
    <CompactLoggedInView {...props} />
  ) : (
    <CompactLoggedOutView {...props} />
  );
  return <F>{renderUserStatus}</F>;
};
