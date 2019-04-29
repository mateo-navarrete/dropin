import React, { Fragment as F } from 'react';
import { OutlinedSignInButton } from './OutlinedSignInButton';
import { ContainedSignInButton } from './ContainedSignInButton';

export const SignInButton = ({ isButtonOutlined, ...props }) => {
  const renderButton = isButtonOutlined ? (
    <OutlinedSignInButton {...props} />
  ) : (
    <ContainedSignInButton {...props} />
  );
  return <F>{renderButton}</F>;
};
