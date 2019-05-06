//jscs:disable requireShorthandArrowFunctions
import React from 'react';

export const Logo = ({ color, height, ...props }) => {
  return (
    <img
      src={require(`../../../assets/logo-${color || 'red'}.png`)}
      alt="dropin"
      height={height - 20}
      width={height * 2 - 40}
    />
  );
};
