import React from 'react';
import { StyledDropArea } from '..';

export const DropsArea = ({ height, width, ...props }) => {
  console.log(height, width);
  return (
    <div className="flex center" style={{ height: height, width: width }}>
      <div className="">
        <StyledDropArea />
      </div>
    </div>
  );
};
