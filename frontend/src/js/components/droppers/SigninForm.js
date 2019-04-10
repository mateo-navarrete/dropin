import React from "react";
// import "../../../styles/SigninForm.css";

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    handleSubmit = () => {
      console.log("submitted!!!!");
    };


  render() {
    return (
      <div className="signin-form">
        <form onSubmit={this.handleSubmit}>
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

export default SigninForm;
