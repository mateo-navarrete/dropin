import React, { Fragment as F } from 'react';
import { LoggedIn } from '../LoggedIn';
import { LoggedOut } from '../LoggedOut';
import { withAuthUser, withDimensions } from '../../containers';

const WrappedComponent = ({ height, width, user, ...props }) => {
  let isCompact = height > width;
  let isLoggedIn = user ? true : false;
  const renderView = isLoggedIn ? (
    <LoggedIn isCompact={isCompact} />
  ) : (
    <LoggedOut isCompact={isCompact} />
  );
  return <F>{renderView}</F>;
};

export const View = withAuthUser(withDimensions(WrappedComponent));
