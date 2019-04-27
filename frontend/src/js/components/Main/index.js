//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';

export const Main = props => {
  return (
    <View {...props}>
      <div>MainView</div>
      <h1>
        width: {props.width} height: {props.height}
      </h1>
      StyledMapWrapper > MapView
    </View>
  );
};
