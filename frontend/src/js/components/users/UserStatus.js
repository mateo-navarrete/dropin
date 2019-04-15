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
      <Button
        variant="outlined"
        color="secondary"
        onClick={props.hideBottomOverlay}
        style={{ marginTop: props.theme.spacing.unit * 1 }}
      >
        RETURN
      </Button>
    </>
  );
};
