//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { IconButton, ShowLoggedOutMenuIcon } from '../material';

export const ShowLoggedOutMenuButton = ({ handleClick, ...props }) => {
  return (
    <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
      <ShowLoggedOutMenuIcon fontSize="large" />
    </IconButton>
  );
};
