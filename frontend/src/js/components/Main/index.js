//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { MyMap } from './MyMap';

export const Main = props => {
  return (
    <View {...props}>
      <MyMap />
    </View>
  );
};

// <div>MainView</div>
// <h1>
//   width: {props.width} height: {props.height}
// </h1>
// StyledMapWrapper > MapView
