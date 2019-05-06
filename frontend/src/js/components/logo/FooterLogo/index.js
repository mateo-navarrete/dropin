//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { View } from './View';
import { Wrapper } from './Wrapper';
import { Logo } from '../Logo';

export const FooterLogo = props => {
  return (
    <Wrapper {...props}>
      <View {...props}>
        <Logo {...props} />
      </View>
    </Wrapper>
  );
};
