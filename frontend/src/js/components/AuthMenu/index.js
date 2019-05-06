//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { withAuthUser, withDimensions } from '../../containers';

export const WrappedComponent = props => {
  return <View {...props} />;
};

export const AuthMenu = withAuthUser(withDimensions(WrappedComponent));
