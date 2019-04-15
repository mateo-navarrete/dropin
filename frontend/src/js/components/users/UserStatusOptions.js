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
        style={{
          marginTop: ((props.height - props.theme.spacing.unit * 8) * 0.5) >> 0
        }}
      >
        SIGN UP
      </Button>
      <div className="flex align">
        <div className="divider-line" style={{ width: props.width * 0.3 }} />
        <div className="divider-space" style={{ width: props.width * 0.1 }} />
        <div> or </div>
        <div className="divider-space" style={{ width: props.width * 0.1 }} />
        <div className="divider-line" style={{ width: props.width * 0.3 }} />
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
