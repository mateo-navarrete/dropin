//jscs:disable requireShorthandArrowFunctions
import React from 'react';
import { Divider } from '../../material';

export const DivideOr = () => {
  return (
    <div className="flex align center">
      <Divider className="divide-or" />
      <div className="or-margin">or</div>
      <Divider className="divide-or" />
    </div>
  );
};
