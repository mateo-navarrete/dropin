import React from "react";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import { Router } from "react-dom";

export class SigninPage extends React.Component {
  constructor() {
    super();
    this.state = {
      signupFormVisible: false
    };
  }

  toggleSignupForm = () => {
    this.setState({
      signupFormVisible: !this.state.signupFormVisible
    });
  };

  render() {
    const { signupFormVisible } = this.state;
    return (
      <div>
        <button onClick={this.toggleSignupForm}>
          {!signupFormVisible ? "Not a member? Sign up now!" : "Back to Login"}
        </button>
        {signupFormVisible ? <SignupForm /> : <SigninForm />}
      </div>
    );
  }
}
