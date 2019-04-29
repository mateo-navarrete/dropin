//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { LogInDemoUser } from './LogInDemoUser';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';
import { DivideOr } from '../../utils';

export const AuthMenu = ({ loginUser, closeAuthMenu, ...props }) => {
  return (
    <F>
      <SignUp closeAuthMenu={closeAuthMenu} {...props} />
      <DivideOr />
      <SignIn closeAuthMenu={closeAuthMenu} loginUser={loginUser} {...props} />
      <DivideOr />
      <LogInDemoUser />
    </F>
  );
};
