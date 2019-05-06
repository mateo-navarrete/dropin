//jscs:disable requireShorthandArrowFunctions
import React, { Fragment as F } from 'react';
import { withStyles } from '../../../containers';
import { Button } from './Button';
import { FormControlLabel, FormGroup, Switch } from '../../material';

const styles = theme => ({
  main: {},
  paper: {},
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
});

const WrappedComponent = ({
  classes,
  handleChange,
  handleSubmit,
  handleClose,
  isUnder18,
  ...props,
}) => {
  return (
    <F>
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

export const Form = withStyles(styles)(WrappedComponent);
