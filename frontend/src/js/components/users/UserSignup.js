import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Button, Paper } from '..';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '../../containers';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
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

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      password: '',
      birth_date: '2019-01-01',
      profile_photo: '',
      instagram_id: '',
      linkedin_id: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('handleSubmit => createUser', this.state);
    this.props.createUser(this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log(this.props, this.state);
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="user_name">User Name</InputLabel>
              <Input
                onChange={this.handleChange}
                id="user_name"
                name="user_name"
                value={this.state.user_name}
                autoComplete="user_name"
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                onChange={this.handleChange}
                value={this.state.password}
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="birth_date">Date of Birth</InputLabel>
              <Input
                onChange={this.handleChange}
                value={this.state.birth_date}
                name="birth_date"
                type="date"
                id="birth_date"
                autoComplete="current-birth_date"
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="profile_photo">Profile Photo URL</InputLabel>
              <Input
                onChange={this.handleChange}
                value={this.state.profile_photo}
                name="profile_photo"
                id="profile_photo"
                autoComplete="current-profile_photo"
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="instagram_id">Instagram ID</InputLabel>
              <Input
                onChange={this.handleChange}
                value={this.state.instagram_id}
                name="instagram_id"
                id="instagram_id"
                autoComplete="current-instagram_id"
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="linkedin_id">LinkedIn ID</InputLabel>
              <Input
                onChange={this.handleChange}
                value={this.state.linkedin_id}
                name="linkedin_id"
                id="linkedin_id"
                autoComplete="current-linkedin_id"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(SignUp);
