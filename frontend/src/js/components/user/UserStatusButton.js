import React, { Fragment as F } from 'react';
import { LoggedInView, LoggedOutView } from '.';

export const UserStatusButton = ({ isLoggedIn, ...props }) => {
  const renderUserStatus = isLoggedIn ? (
    <LoggedInView {...props} />
  ) : (
    <LoggedOutView {...props} />
  );
  return <F>{renderUserStatus}</F>;
};
