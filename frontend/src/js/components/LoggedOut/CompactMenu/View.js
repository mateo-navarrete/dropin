//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { LogInDemoUser } from '../../auth/LogInDemoUser';
import { LogIn } from '../../LogIn';
import { SignUp } from '../../SignUp';
import { DivideOr } from '../../utils';

export const View = ({ handleClose }) => {
  return (
    <F>
      <SignUp handleClose={handleClose} variant="contained" />
      <DivideOr />
      <LogIn handleClose={handleClose} variant="contained" />
      <DivideOr />
      <LogInDemoUser />
    </F>
  );
};
