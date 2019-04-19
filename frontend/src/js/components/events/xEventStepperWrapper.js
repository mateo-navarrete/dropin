import React from "react";
import { withAuthUser, withStyles } from "../../containers";
import { Button, Paper, UserStatus, EventStepper } from "..";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("310")]: {
      width: 310
    },
    [theme.breakpoints.up("370")]: {
      width: 360
    },
    [theme.breakpoints.up(400 + theme.spacing.unit)]: {
      width: 400
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`
  }
});

const UsersEvents = props => {
  const handleLogout = e => {
    e.preventDefault();
    props.logoutUser();
  };

  return (
    <div
      className="flex wrap"
      style={{ bottom: props.bottomOverlay ? 0 : -+`${props.height}` }}
    >
      <div className="centered">
        <main className={props.classes.main}>
          <Paper className={props.classes.paper}>
            {props.isLoggedIn ? (
              <>
                <Button
                  type="submit"
                  fullWidth
                  variant="text"
                  color="secondary"
                  onClick={handleLogout}
                  className={props.classes.submit}
                >
                  Sign Out
                </Button>
                <EventStepper hideBottomOverlay={props.hideBottomOverlay} />
              </>
            ) : (
              <UserStatus {...props} />
            )}
            <br />
            <Button variant="outlined" onClick={props.hideBottomOverlay}>
              CANCEL
            </Button>
          </Paper>
        </main>
      </div>
    </div>
  );
};

export const UserEvents = withAuthUser(withStyles(styles)(UsersEvents));
