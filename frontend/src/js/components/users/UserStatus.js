import React from "react";
import { UserSignUpWrapper, UserSignInWrapper, UserStatusOptions } from "..";

export const UserStatus = props => {
  return (
    <>
      {props.signup ? (
        <UserSignUpWrapper {...props} />
      ) : props.signin ? (
        <UserSignInWrapper {...props} />
      ) : (
        <UserStatusOptions {...props} />
      )}
    </>
  );
};
