//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { IconButton, ShowLoggedInMenuIcon } from '../material';

export const ShowLoggedInMenuButton = ({ handleClick, ...props }) => {
  return (
    <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
      <ShowLoggedInMenuIcon fontSize="large" />
    </IconButton>
  );
};
