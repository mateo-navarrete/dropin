import React from "react";
import { withEvents, withStyles, withTheme } from "../../containers";
import { Button, Paper, IconWrapper, Typography } from "..";

const getTime = str => {
  let d = new Date(str);
  return d.toString();
};

const colors = {
  family: "red",
  party: "blue",
  sports: "green"
};

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
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
});

const EventButton = ({
  topOverlay,
  category,
  hideTopOverlay,
  height,
  width,
  eventID,
  classes,
  theme,
  getAddress,
  ...props
}) => {
<<<<<<< HEAD
  // console.log(props, category);
=======
>>>>>>> 39fb71bfc2a58372858fa84a3f1f3550fc5ec4b2
  return (
    <>
      <Button variant="outlined" onClick={hideTopOverlay}>
        REPORT
      </Button>
      <Button variant="outlined" onClick={hideTopOverlay}>
        EDIT
      </Button>
      <Button variant="outlined" onClick={hideTopOverlay}>
        DELETE
      </Button>
    </>
  );
};

// <div className="flex center">
//   <Paper className={classes.paper} style={style}>

// <Button
//   variant="outlined"
//   color="secondary"
//   onClick={hideTopOverlay}
//   style={{ marginTop: height - theme.spacing.unit * 30 }}
// >
//   RETURN
// </Button>

export const EventButtons = withEvents(
  withStyles(styles)(withTheme()(EventButton))
);
