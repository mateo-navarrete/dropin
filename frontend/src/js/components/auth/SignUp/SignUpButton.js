import React, { Fragment as F } from 'react';
import { OutlinedSignUpButton } from './OutlinedSignUpButton';
import { MaterialSignUpButton } from './MaterialSignUpButton';

export const SignUpButton = ({ isButtonOutlined, ...props }) => {
  const renderButton = isButtonOutlined ? (
    <OutlinedSignUpButton {...props} />
  ) : (
    <MaterialSignUpButton {...props} />
  );
  return <F>{renderButton}</F>;
};
