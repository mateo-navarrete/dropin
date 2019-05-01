//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { Wrapper } from './Wrapper';

export const Header = props => {
  return (
    <Wrapper {...props}>
      <View {...props} />
    </Wrapper>
  );
};
