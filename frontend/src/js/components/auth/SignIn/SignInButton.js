import React, { Fragment as F } from 'react';
import { OutlinedSignInButton } from './OutlinedSignInButton';
import { MaterialSignInButton } from './MaterialSignInButton';

export const SignInButton = ({ isButtonOutlined, ...props }) => {
  const renderButton = isButtonOutlined ? (
    <OutlinedSignInButton {...props} />
  ) : (
    <MaterialSignInButton {...props} />
  );
  return <F>{renderButton}</F>;
};
