import React, { Fragment as F } from 'react';
import { LoggedInView, LoggedOutView } from '.';
import { withAuth, withDimensions } from '../../../containers';

const Wrapper = props => {
  let isLoggedIn = () => (props.user ? true : false);
  const renderView = isLoggedIn() ? (
    <LoggedInView {...props} />
  ) : (
    <LoggedOutView {...props} />
  );
  return <F>{renderView}</F>;
};

export const AuthStatusView = withAuth(withDimensions(Wrapper));
