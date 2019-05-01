//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import ShowMenuIcon from '@material-ui/icons/Input';
import { IconButton } from '../../material';

export const Button = ({ handleClick, ...props }) => {
  return (
    <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
      <ShowMenuIcon fontSize="large" />
    </IconButton>
  );
};
