import React, { Fragment as F } from 'react';
import { AgeVerification } from './AgeVerification';
import { Form } from './Form';

export const View = ({ ageVerified, hideAgeVerification, ...props }) => {
  console.log(props);
  const renderView = ageVerified ? (
    <Form />
  ) : (
    <AgeVerification hideAgeVerification={hideAgeVerification} />
  );
  return <F>{renderView}</F>;
};
