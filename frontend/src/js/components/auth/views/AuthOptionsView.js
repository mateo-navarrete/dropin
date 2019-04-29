//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import {
  DefaultLogInButton,
  DefaultSignInButton,
  DemoLogInButton,
  DivideOr
} from '../utils';

export const AuthOptionsView = ({ loginDemoUser, ...props }) => {
  return (
    <F>
      <DefaultSignInButton {...props} />
      <DivideOr />
      <DefaultLogInButton {...props} />
      <DivideOr />
      <DemoLogInButton handleClick={loginDemoUser} />
    </F>
  );
};
