import React from "react";
// import "../../../../styles/SignupForm.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      birthdate: "",
      profile_photo: "",
      instagram_id: "",
      linkedin_id: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("submitted!!!!");
  };

  render() {
    return (
      <div className="signin-form">
        <form onSubmit={this.handleSubmit}>
          <p style={{ color: "red" }}>Are you over 18?</p>
          <input type="radio" id="huey" name="ageQuestionRadio" value="yes" />
          <label style={{ color: "red" }} name="huey">
            Yes
          </label>
          <input type="radio" id="huey" name="ageQuestionRadio" value="no" />
          <label style={{ color: "red" }} name="huey">
            No
          </label>
          <br />
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
          <input
            type="date"
            name="birthdate"
            value={this.state.birthdate}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Enter URL"
            name="profile_photo"
            value={this.state.profile_photo}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Your Instagram ID"
            name="instagram_id"
            value={this.state.instagram_id}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Your LinkedIn ID"
            name="linkedin_id"
            value={this.state.linkedin_id}
            onChange={this.handleChange}
          />
          <button type="submit">Sign Me Up!</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
