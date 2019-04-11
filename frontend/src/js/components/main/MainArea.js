import React from 'react';
import { withScreenSize } from '../../containers';
// import { MainMap } from '.';
import { PinsRouter } from '..';

const Main = ({ mainHeight, mainWidth, ...props }) => {
  return (
    <div className="main-area" style={{ height: mainHeight, width: mainWidth }}>
      <PinsRouter height={mainHeight} width={mainWidth} />
    </div>
  );
};
// <MainMap height={mainHeight} width={mainWidth} />

export const MainArea = withScreenSize(Main);
