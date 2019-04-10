import React from "react";
import "../../../../styles/SignupForm.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    handleSubmit = () => {
      console.log("submitted!!!!");
    };
  }

  render() {
    return (
      <div className="signin-form">
        <form onSubmit={this.handleSubmit}>
          Are you over 18?
          <label class="container">
            Yes
            <input type="checkbox" checked="checked" />
            <span class="checkmark" />
          </label>
          <label class="container">
            No
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SignupForm;
