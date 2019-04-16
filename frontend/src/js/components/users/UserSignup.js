import React from "react";
import { withStyles } from "../../containers";
import {
  Button,
  Avatar,
  FormControl,
  Input,
  InputLabel,
  Typography,
  LockOutlinedIcon,
  Visibility,
  VisibilityOff,
  InputAdornment,
  IconButton
} from "..";

const styles = theme => ({
  main: {},
  paper: {},
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      password: "",
      birth_date: "2019-01-01",
      profile_photo: "",
      instagram_id: "",
      linkedin_id: "",
      showPassword: false
    };
  }
  handleShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit => createUser", this.state);
    this.props.createUser(this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log(this.props, this.state);
    const { classes } = this.props;
    const textFields = [
      { id: "birth_date", label: "Date of Birth" },
      { id: "profile_photo", label: "Profile Photo URL" },
      { id: "instagram_id", label: "Instagram ID" },
      { id: "linkedin_id", label: "LinkedIn ID" }
    ];

    const renderTextFields = textFields.map(field => {
      const { id, label } = field;
      return (
        <FormControl
          margin="normal"
          required={id === "birth_date"}
          fullWidth
          key={id}
        >
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <Input
            id={id}
            name={id}
            value={this.state[id]}
            onChange={this.handleChange}
            type={id === "birth_date" ? "date" : "text"}
            autoComplete={id === "birth_date" ? "" : "off"}
          />
        </FormControl>
      );
    });

    return (
      <>
        {this.props.height > 600 && (
          <>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          </>
        )}

        <form className={classes.form} onSubmit={this.handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="user_name">User Name</InputLabel>
            <Input
              onChange={this.handleChange}
              id="user_name"
              name="user_name"
              value={this.state.user_name}
              autoComplete="off"
              autoFocus
            />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              name="password"
              id="password"
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.password}
              onChange={this.handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleShowPassword}
                  >
                    {this.state.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {renderTextFields}
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
      </>
    );
  }
}

export default withStyles(styles)(SignUp);
