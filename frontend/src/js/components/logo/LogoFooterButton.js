//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Logo, LogoFooterWrapper } from '.';
import { ButtonWrapper } from '../utils';

export const LogoFooterButton = ({ height, color, ...props }) => {
  return (
    <LogoFooterWrapper height={height}>
      <ButtonWrapper>
        <Logo height={height} color={color} />
      </ButtonWrapper>
    </LogoFooterWrapper>
  );
};
