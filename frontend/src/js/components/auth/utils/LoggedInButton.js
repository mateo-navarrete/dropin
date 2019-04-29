//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { IconButton, LoggedInIcon } from '../../material';

export const LoggedInButton = ({ handleClick, ...props }) => {
  return (
    <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
      <LoggedInIcon fontSize="large" />
    </IconButton>
  );
};
