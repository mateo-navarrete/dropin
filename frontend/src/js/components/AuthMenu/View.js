import React, { Fragment as F } from 'react';
import { LoggedIn } from '../LoggedIn';
import { LoggedOut } from '../LoggedOut';

export const View = ({ height, width, user, ...props }) => {
  let isCompact = height > width;
  let isLoggedIn = user ? true : false;
  const renderView = isLoggedIn ? (
    <LoggedIn isCompact={isCompact} />
  ) : (
    <LoggedOut isCompact={isCompact} />
  );
  return <F>{renderView}</F>;
};
