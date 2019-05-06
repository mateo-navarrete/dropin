//jscs:disable requireShorthandArrowFunctions
import React from 'react';

export const Wrapper = ({ height, children, ...props }) => {
  return (
    <div
      style={{
        width: height * 2,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          marginTop: -((height * 0.8) >> 0),
          position: 'fixed',
          outline: 'none',
        }}
      >
        {children}
      </div>
    </div>
  );
};
