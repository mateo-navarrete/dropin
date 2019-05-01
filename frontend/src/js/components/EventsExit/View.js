//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { Button } from './Button';

export const View = ({ handleClose, ...props }) => {
  return (
    <F>
      <Button handleClose={handleClose} />
    </F>
  );
};
