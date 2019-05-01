//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { IconButton, PersonIcon } from '../material';

export const Button = ({ handleClick, ...props }) => {
  return (
    <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
      <PersonIcon fontSize="large" />
    </IconButton>
  );
};
