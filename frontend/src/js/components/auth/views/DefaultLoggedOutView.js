//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { OutlinedLogInButton, OutlinedSignInButton } from '../utils';

export const DefaultLoggedOutView = () => {
  return (
    <F>
      <OutlinedSignInButton />
      <OutlinedLogInButton />
    </F>
  );
};
