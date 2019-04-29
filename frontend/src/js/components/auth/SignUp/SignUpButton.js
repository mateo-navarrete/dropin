import React, { Fragment as F } from 'react';
import { OutlinedSignUpButton } from './OutlinedSignUpButton';
import { ContainedSignUpButton } from './ContainedSignUpButton';

export const SignUpButton = ({ isButtonOutlined, ...props }) => {
  const renderButton = isButtonOutlined ? (
    <OutlinedSignUpButton {...props} />
  ) : (
    <ContainedSignUpButton {...props} />
  );
  return <F>{renderButton}</F>;
};
