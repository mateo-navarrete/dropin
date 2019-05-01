//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { LogInDemoUser } from '../../auth/LogInDemoUser';
import { LogIn } from '../../LogIn';
import { SignUp } from '../../SignUp';
import { DivideOr } from '../../utils';

export const View = ({ closeLoggedOutMenu }) => {
  return (
    <F>
      <SignUp closeLoggedOutMenu={closeLoggedOutMenu} variant="contained" />
      <DivideOr />
      <LogIn closeLoggedOutMenu={closeLoggedOutMenu} variant="contained" />
      <DivideOr />
      <LogInDemoUser />
    </F>
  );
};
