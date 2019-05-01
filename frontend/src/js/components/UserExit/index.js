import React, { Fragment as F } from 'react';
// import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
// import Card from "@material-ui/core/Card";
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
// import LockOpenIcon from "@material-ui/icons/LockOpen";
import { LogOut } from '../LogOut';

const styles = theme => ({
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
  button: {
    margin: '40px 20px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const WrappedComponent = ({ classes, handleClose, ...props }) => {
  return (
    <F>
      <LogOut {...props} />
      <Button variant="outlined" color="secondary" className={classes.button} onClick={handleClose}>
        Close
        <ClearIcon className={classes.rightIcon} />
      </Button>
    </F>
  );
};

// <Button variant="outlined" color="default" className={classes.button}>
//   Log Out
//   <LockOpenIcon className={classes.rightIcon} />
// </Button>
// </CardActions>
// </Card>

export const UserExit = withStyles(styles)(WrappedComponent);
