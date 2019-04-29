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

// <MyMap width={width} height={height} {...props}/>
