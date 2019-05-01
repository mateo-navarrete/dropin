//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { IconButton, MenuIcon } from '../material';

export const Button = ({ handleClick, ...props }) => {
  return (
    <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
      <MenuIcon fontSize="large" />
    </IconButton>
  );
};
