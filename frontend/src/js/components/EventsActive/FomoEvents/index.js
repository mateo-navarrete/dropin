//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { withToggleShowChildren, withGetGeolocation } from '../../../containers';

const WrappedComponent = props => {
  return <View {...props} />;
};

export const FomoEvents = withGetGeolocation(withToggleShowChildren(WrappedComponent));
