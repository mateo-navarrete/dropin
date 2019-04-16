import React from "react";
import { UserStatusOptions, UserSignUpWrapper } from "..";
import StyledSignIn from "./xSigninForm";

export const UserStatus = props => {
  return (
    <>
      {props.signup ? (
        <UserSignUpWrapper {...props} />
      ) : props.signin ? (
        <StyledSignIn />
      ) : (
        <UserStatusOptions {...props} />
      )}
    </>
  );
};

// <br />
// <Button variant="outlined" onClick={props.hideBottomOverlay}>
//   CANCEL
// </Button>
