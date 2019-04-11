import React from "react";
import SigninForm from "./SigninForm"
import SignupForm from "./SignupForm"
import {Router} from "react-dom"

export const SigninPage = props => {
  return (
    <div>
      <SigninForm />
      <SignupForm />
    </div>
  );
};
