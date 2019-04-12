import React from 'react';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import { Router } from 'react-dom';
import Button from '@material-ui/core/Button';

export class SigninPage extends React.Component {
  constructor() {
    super();
    this.state = {
      signupFormVisible: false,
    };
  }

  toggleSignupForm = () => {
    this.setState({
      signupFormVisible: !this.state.signupFormVisible,
    });
  };

  render() {
    const { signupFormVisible } = this.state;
    return (
      <div>
        {signupFormVisible ? <SignupForm /> : <SigninForm />}
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.toggleSignupForm}
        >
          {!signupFormVisible ? 'Not a member? Sign up now!' : 'Back to Login'}
        </Button>
      </div>
    );
  }
}
