//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { withStyles, withDimensions } from '../../../containers';
import { Button } from './Button';
import {
  Avatar,
  FormControlLabel,
  FormGroup,
  LockOutlinedIcon,
  Switch,
  Typography
} from '../../material';

const styles = theme => ({
  main: {},
  paper: {},
  avatar: {
    margin: `0 0 ${theme.spacing.unit * 2}px`,
    backgroundColor: '#FB364A', // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  colorSwitchBase: {
    color: '#fb5e6e',
    '&$colorChecked': {
      color: '#FB364A',
      '& + $colorBar': {
        backgroundColor: '#fb5e6e',
      },
    },
  },
  colorBar: {},
  colorChecked: {},
  // grow: {
  //   flexGrow: 1,
  // },
});

const WrappedComponent = ({
  classes,
  handleChange,
  handleSubmit,
  height,
  isUnder18,
  ...props,
}) => {
  // classes.grow
  const renderHeader =
    height > 600 ? (
      <div className="flex col align">
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          You must be at least 18 years old to create a dropin Account.
        </Typography>
      </div>
    ) : null;
  return (
    <F>
      {renderHeader}
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormGroup style={{ display: 'block' }}>
          <FormControlLabel
            control={
              <Switch
                checked={isUnder18 ? false : true}
                value={isUnder18 ? false : true}
                id="isUnder18"
                name="isUnder18"
                onChange={handleChange}
                classes={{
                  switchBase: classes.colorSwitchBase,
                  checked: classes.colorChecked,
                  bar: classes.colorBar,
                }}
              />
            }
            label="I am at least 18 years old."
          />
        </FormGroup>
        <Button isUnder18={isUnder18} />
      </form>
    </F>
  );
};

export const View = withStyles(styles)(withDimensions(WrappedComponent));
