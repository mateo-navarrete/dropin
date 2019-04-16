import React from "react";
import { UserSignUpWrapper, UserSignIn, UserStatusOptions } from "..";

export const UserStatus = props => {
  return (
    <>
      {props.signup ? (
        <UserSignUpWrapper {...props} />
      ) : props.signin ? (
        <UserSignIn {...props} />
      ) : (
        <UserStatusOptions {...props} />
      )}
    </>
  );
};
