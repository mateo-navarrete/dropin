//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import {
  DefaultLogInButton,
  DefaultSignInButton,
  DemoLogInButton,
  DivideOr
} from '../utils';

export const AuthOptionsView = ({ loginDemoUser, closeModal, ...props }) => {
  return (
    <F>
      <DefaultSignInButton {...props} />
      <DivideOr />
      <DefaultLogInButton {...props} closeModal={closeModal} />
      <DivideOr />
      <DemoLogInButton handleClick={loginDemoUser} />
    </F>
  );
};
