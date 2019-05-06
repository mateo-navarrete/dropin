//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { IconButton, MyLocationIcon } from '../../material';

export const CenterMarker = props => {
  return (
    <View>
      <IconButton onClick={props.onCenterClick}>
        <MyLocationIcon fontSize="default" />
      </IconButton>
    </View>
  );
};
