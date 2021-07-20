import React from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "Vlad",
      email: "leppa@gmail.com",
      password: "27031993",
      passwordConfirm: "27031993",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { signUpStart } = this.props;
    const { displayName, email, password, passwordConfirm } = this.state;

    if (password !== passwordConfirm) {
      alert("Password don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { displayName, email, password, passwordConfirm } = this.state;
    return (
      <section className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display name"
            value={displayName}
            onChange={this.handleInput}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={this.handleInput}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleInput}
            required
          />
          <FormInput
            type="password"
            name="passwordConfirm"
            label="Confirm Password"
            value={passwordConfirm}
            onChange={this.handleInput}
            required
          />
          <CustomButton type="submit" mode="black">
            Sign up
          </CustomButton>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (authData) => dispatch(signUpStart(authData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
