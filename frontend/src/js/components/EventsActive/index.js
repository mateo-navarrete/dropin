//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { withToggleShowChildren } from '../../containers';

const WrappedComponent = (props) => {
  return <View {...props} />;
};

export const EventsActive = withToggleShowChildren(WrappedComponent);
