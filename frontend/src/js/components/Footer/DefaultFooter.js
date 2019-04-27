//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { LogoFooterButton } from '../logo';

export const DefaultFooter = ({ height, ...props }) => {
  return <LogoFooterButton height={height} color="white" />;
};
