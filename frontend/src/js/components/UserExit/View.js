//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { Button } from './Button';
import { LogOut } from '../LogOut';

export const View = ({ handleClose, ...props }) => {
  return (
    <F>
      <LogOut {...props} />
      <Button handleClose={handleClose} />
    </F>
  );
};
