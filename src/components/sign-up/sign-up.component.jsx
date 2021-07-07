import React from "react";
import "./sign-up.styles.css";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, passwordConfirm } = this.state;

    if (password !== passwordConfirm) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
    } catch (error) {
      console.log(error);
    }
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
          <CustomButton type="submit" className="black">
            Sign up
          </CustomButton>
        </form>
      </section>
    );
  }
}
