//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { withUser } from '../../containers';

const WrappedComponent = props => {
  return <View {...props} />;
};

export const UserProfile = withUser(WrappedComponent);
