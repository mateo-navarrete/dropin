//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { View } from './View';
import { withAuth, withToggleShowChildren } from '../../containers';

const WrappedComponent = props => {
  const renderView = props.user ? <View {...props} /> : '';
  return <F>{renderView}</F>;
};

export const UserFavorites = withAuth(withToggleShowChildren(WrappedComponent));
