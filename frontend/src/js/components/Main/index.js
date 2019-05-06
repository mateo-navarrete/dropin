//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { Map } from '../Map';

export const Main = props => {
  return (
    <View {...props}>
      <Map />
    </View>
  );
};

// <MyMap width={width} height={height} {...props}/>
