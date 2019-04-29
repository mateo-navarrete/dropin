//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { OutlinedLogInButton, OutlinedSignInButton } from '../utils';

export const DefaultLoggedOutView = props => {
  return (
    <F>
      <OutlinedSignInButton {...props} />
      <OutlinedLogInButton {...props} />
    </F>
  );
};
