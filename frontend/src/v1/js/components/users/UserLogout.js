import React from "react";
import { withAuthUser } from "../../containers";
import { Button } from "..";

const UsersLogout = props => {
  const handleLogout = e => {
    e.preventDefault();
    props.logoutUser();
  };
  return (
    <>
      {props.isLoggedIn && (
        <div style={{ position: "absolute", marginLeft: "40%" }}>
          <Button
            type="submit"
            variant="text"
            color="secondary"
            height={props.height}
            onClick={handleLogout}
          >
            LOG OUT
          </Button>
        </div>
      )}
    </>
  );
};
// fullWidth
// className={props.classes.submit}

export const UserLogout = withAuthUser(UsersLogout);
