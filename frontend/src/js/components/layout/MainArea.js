import React from 'react';
import { EventsRouter } from '..';
import { withAreaSizes } from '../../containers';

const Main = ({ mainHeight, ...props }) => {
  return (
    <div style={{ height: mainHeight }}>
      <EventsRouter />
    </div>
  );
};

export const MainArea = withAreaSizes(Main);
