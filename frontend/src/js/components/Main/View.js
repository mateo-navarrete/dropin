//jscs:disable requireShorthandArrowFunctions
import React from 'react';

const Wrapper = props => {
  const { children, height } = props;
  return <div style={{ height: height }}>{children}</div>;
};

export const View = Wrapper;
