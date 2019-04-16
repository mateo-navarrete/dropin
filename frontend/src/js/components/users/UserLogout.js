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
        <>
          <Button
            type="submit"
            fullWidth
            variant="text"
            color="secondary"
            onClick={handleLogout}
            className={props.classes.submit}
          >
            Log Out
          </Button>
        </>
      )}
    </>
  );
};

export const UserLogout = withAuthUser(UsersLogout);
