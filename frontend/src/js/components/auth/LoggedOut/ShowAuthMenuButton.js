//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { IconButton, ShowAuthMenuIcon } from '../../material';

export const ShowAuthMenuButton = ({ handleClick, ...props }) => {
  return (
    <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
      <ShowAuthMenuIcon fontSize="large" />
    </IconButton>
  );
};
