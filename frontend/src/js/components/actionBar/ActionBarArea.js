import React from 'react';
import { withScreenSize } from '../../containers';
import { StyledActionBar } from '..';

const ActionBar = ({
  actionBarHeight,
  actionBarWidth,
  marginLeft,
  ...props,
}) => {
  return (
    <div
      className="actionBar-area"
      style={{
    // actionBarHeight: actionBarHeight,
    // actionBarwidth: actionBarWidth,
    // marginLeft: marginLeft,
  }}
    >
      <StyledActionBar
        height={actionBarHeight}
        width={actionBarWidth}
        marginLeft={marginLeft}
      />
    </div>
  );
};

export const ActionBarArea = withScreenSize(ActionBar);
