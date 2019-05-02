//jscs:disable requireShorthandArrowFunctions
import React from 'react';

const WrappedComponent = props => {
  console.log('@View', props);
  const { children, height } = props;
  return <div style={{ height: height }}>{children}</div>;
};

export const View = WrappedComponent;
