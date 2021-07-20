import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-in.styles.css";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ signInWithGoogle, signInWithEmail }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInWithEmail(email, password);
  };

  return (
    <section className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email or password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="form-buttons">
          <CustomButton type="submit" mode="black" borderWidth="2px">
            Sign in
          </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} mode="blue">
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithEmail: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
