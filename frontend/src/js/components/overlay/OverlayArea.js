import React from 'react';
import { withScreenSize } from '../../containers';

const Overlay = props => {
  console.log(props);
  return (
    <div className="overlay-area">
      <h1>Overlay</h1>
    </div>
  );
};

export const OverlayArea = withScreenSize(Overlay);
