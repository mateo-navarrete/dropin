//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { Logo } from '../Logo';

export const HeaderLogo = props => {
  return (
    <View {...props}>
      <Logo {...props} />
    </View>
  );
};
