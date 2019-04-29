import React, { Fragment as F } from 'react';
import { LoggedIn } from './LoggedIn';
import { LoggedOut } from './LoggedOut';
import { withAuth, withDimensions } from '../../containers';

const WrappedComponent = props => {
  let isLoggedIn = () => (props.user ? true : false);
  const renderAuthStatus = isLoggedIn() ? (
    <LoggedIn {...props} />
  ) : (
    <LoggedOut {...props} />
  );
  return <F>{renderAuthStatus}</F>;
};

export const AuthStatus = withAuth(withDimensions(WrappedComponent));
