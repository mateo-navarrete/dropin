//jscs:disable requireShorthandArrowFunctions
import React, { Component, Fragment as F } from 'react';
import { withStyles } from '../../../containers';
import {
  Avatar,
  Button,
  FormControlLabel,
  FormGroup,
  LockOutlinedIcon,
  Switch,
  Typography,
} from '../../material';

const styles = theme => ({
  main: {},
  paper: {},
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class WrappedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUnder18: true,
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { isUnder18 } = this.state;
    if (!isUnder18) this.props.hideAgeVerification();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value + '' === 'true',
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <F>
        {this.props.height > 600 && (
          <F>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              You must be at least 18 years old to create a dropin Account.
            </Typography>
          </F>
        )}
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.isUnder18 ? false : true}
                  value={this.state.isUnder18 ? false : true}
                  id="isUnder18"
                  name="isUnder18"
                  onChange={this.handleChange}
                />
              }
              label="I am at least 18 years old."
            />
          </FormGroup>
          <Button
            disabled={this.state.isUnder18}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create my dropin Account
          </Button>
        </form>
      </F>
    );
  }
}
export const AgeVerification = withStyles(styles)(WrappedComponent);
