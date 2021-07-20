import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.css";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { displayName, email, password, passwordConfirm } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      alert("Password don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };
  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <section className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display name"
          value={displayName}
          onChange={handleInput}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleInput}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleInput}
          required
        />
        <FormInput
          type="password"
          name="passwordConfirm"
          label="Confirm Password"
          value={passwordConfirm}
          onChange={handleInput}
          required
        />
        <CustomButton type="submit" mode="black">
          Sign up
        </CustomButton>
      </form>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (authData) => dispatch(signUpStart(authData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
