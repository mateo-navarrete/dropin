import React from "react";
import { Button } from "..";

export const UserStatusOptions = props => {
  return (
    <>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={props.showSignup}
      >
        SIGN UP
      </Button>
      <div className="flex align">
        <div className="divider-line" style={{ width: props.width * 0.09 }} />
        <div className="divider-space" style={{ width: props.width * 0.01 }} />
        <div> or </div>
        <div className="divider-space" style={{ width: props.width * 0.01 }} />
        <div className="divider-line" style={{ width: props.width * 0.09 }} />
      </div>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={props.showSignin}
      >
        SIGN IN
      </Button>
    </>
  );
};
