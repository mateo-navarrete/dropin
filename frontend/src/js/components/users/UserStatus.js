import React from "react";
import { Button, UserStatusOptions } from "..";
import StyledSignIn from "./xSigninForm";
import UserSignUp from "./UserSignup";

export const UserStatus = props => {
  return (
    <>
      {props.signup ? (
        <UserSignUp {...props} />
      ) : props.signin ? (
        <StyledSignIn />
      ) : (
        <UserStatusOptions {...props} />
      )}
      <br />
      <Button
        variant="outlined"
        onClick={props.hideBottomOverlay}
      >
        CANCEL
      </Button>
    </>
  );
};

// style={{ marginTop: props.theme.spacing.unit * 1 }}
