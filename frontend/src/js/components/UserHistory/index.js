//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { View } from './View';
import { withAuth, withToggleShowChildren, withUser } from '../../containers';

const WrappedComponent = props => {
  const renderView = props.user ? <View {...props} /> : '';
  return <F>{renderView}</F>;
};

export const UserHistory = withAuth(
  withUser(withToggleShowChildren(WrappedComponent))
);
