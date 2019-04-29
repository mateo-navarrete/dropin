//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { IconButton, LoggedOutIcon } from '../../material';

export const LoggedOutButton = ({ handleClick, ...props }) => {
  return (
    <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
      <LoggedOutIcon fontSize="large" />
    </IconButton>
  );
};
