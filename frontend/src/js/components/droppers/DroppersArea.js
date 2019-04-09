import React from 'react';
import { StyledPinDropButton } from '..';

export const DroppersArea = ({ height, width, ...props }) => {
  // console.log(height, width);
  return (
    <div className="flex center" style={{ height: height, width: width }}>
      <div className="">
        <StyledPinDropButton />
      </div>
    </div>
  );
};
