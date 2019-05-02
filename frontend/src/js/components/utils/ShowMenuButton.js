//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { IconButton } from '../material';

export const ShowMenuButton = ({ children, buttonIcon, handleClick, ...props }) => {
  return (
    <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
      {buttonIcon}
    </IconButton>
  );
};
