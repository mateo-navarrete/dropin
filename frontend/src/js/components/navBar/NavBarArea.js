import React from 'react';
import { withScreenSize } from '../../containers';
import { StyledNavBar } from '..';

const NavBar = ({
  navBarHeight,
  navBarWidth,
  mainWidth,
  marginLeft,
  ...props,
}) => {
  return (
    <div
      className="navBar-area"
      style={
        {
    // height: navBarHeight,
    // width: navBarWidth,
    // marginLeft: marginLeft,
  }
      }
    >
      <StyledNavBar
        height={navBarHeight}
        width={mainWidth}
      />
    </div>
  );
};

export const NavBarArea = withScreenSize(NavBar);
