import React, { Fragment as F } from 'react';
import { LoggedInView, DefaultLoggedOutView } from '.';

export const DefaultAuthStatusView = ({ isLoggedIn, ...props }) => {
  const renderUserStatus = isLoggedIn ? (
    <LoggedInView {...props} />
  ) : (
    <DefaultLoggedOutView {...props} />
  );
  return <F>{renderUserStatus}</F>;
};
