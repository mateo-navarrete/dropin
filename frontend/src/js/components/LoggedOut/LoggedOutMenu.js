//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { LogInDemoUser } from './LogInDemoUser';
import { SignIn } from '../auth/SignIn';
import { SignUp } from '../auth/SignUp';
import { DivideOr } from '../utils';

export const LoggedOutMenu = ({ loginUser, closeLoggedOutMenu, ...props }) => {
  return (
    <F>
      <SignUp closeLoggedOutMenu={closeLoggedOutMenu} {...props} />
      <DivideOr />
      <SignIn closeLoggedOutMenu={closeLoggedOutMenu} loginUser={loginUser} {...props} />
      <DivideOr />
      <LogInDemoUser />
    </F>
  );
};
