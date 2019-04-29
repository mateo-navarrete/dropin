//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { DivideOr } from './DivideOr';
import { LogInDemoUser } from './LogInDemoUser';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';

export const AuthMenu = ({ loginUser, closeAuthMenu, ...props }) => {
  return (
    <F>
      <SignUp closeAuthMenu={closeAuthMenu} />
      <DivideOr />
      <SignIn closeAuthMenu={closeAuthMenu} loginUser={loginUser} />
      <DivideOr />
      <LogInDemoUser />
    </F>
  );
};
