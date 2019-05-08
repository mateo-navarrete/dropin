//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { withToggleShowChildren, withGetEvents } from '../../containers';

const WrappedComponent = props => {
  return <View {...props} />;
};

export const EventsActive = withToggleShowChildren(
  withGetEvents(WrappedComponent)
);
