import React from 'react';
import { withScreenSize } from '../../containers';
import { StyledActionBar } from '..';
import { StepperModal } from '../droppers/modal/StepperModal';

const ActionBar = ({
  actionBarHeight,
  actionBarWidth,
  mainWidth,
  marginLeft,
  ...props,
}) => {
  return (
    <div
      className="actionBar-area"
      style={{
        // actionBarHeight: actionBarHeight,
        width: mainWidth,
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

// <StepperModal {...props} />

export const ActionBarArea = withScreenSize(ActionBar);
