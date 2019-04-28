//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import {
  DefaultLogInButton,
  DefaultSignInButton,
  DemoLogInButton,
  DivideOr
} from '../utils';

export const AuthOptionsView = () => {
  return (
    <F>
      <DefaultSignInButton />
      <DivideOr />
      <DefaultLogInButton />
      <DivideOr />
      <DemoLogInButton />
    </F>
  );
};
