import React from "react";
import { Button } from "..";
import StyledSignIn from "./xSigninForm";
import StyledSignUp from "./xSignupForm";

export const UserStatus = props => {
  console.log("@us", props);
  return (
    <>
      {props.signup ? (
        <StyledSignUp />
      ) : props.signin ? (
        <StyledSignIn />
      ) : (
        <>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={props.showSignup}
            style={{
              marginTop:
                ((props.height - props.theme.spacing.unit * 8) * 0.5) >> 0
            }}
          >
            SIGNUP
          </Button>
          <div className="flex align">
            <div
              className="divider-line"
              style={{ width: props.width * 0.3 }}
            />
            <div
              className="divider-space"
              style={{ width: props.width * 0.1 }}
            />
            <div> or </div>
            <div
              className="divider-space"
              style={{ width: props.width * 0.1 }}
            />
            <div
              className="divider-line"
              style={{ width: props.width * 0.3 }}
            />
          </div>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={props.showSignin}
          >
            SIGNIN
          </Button>
        </>
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

// export const UserStatus = withAuthUser(UsersStatus);
