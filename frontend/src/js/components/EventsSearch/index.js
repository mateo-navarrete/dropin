//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';

const WrappedComponent = props => {
  return <View {...props} />;
};

export const EventsSearch = WrappedComponent;
