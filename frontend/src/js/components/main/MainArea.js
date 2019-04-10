import React from 'react';
import { withScreenSize } from '../../containers';
import { MainMap } from '.';

const Main = ({ mainHeight, mainWidth, ...props }) => {
  return (
    <div className="main-area" style={{ height: mainHeight, width: mainWidth }}>
      <MainMap height={mainHeight} width={mainWidth} />
    </div>
  );
};

export const MainArea = withScreenSize(Main);
