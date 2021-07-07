import React from "react";
import "./sign-in.styles.css";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = async (event) => {
      event.preventDefault();
      const { email, password } = this.state;
      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState(
          { email: "", password: "" }
          // () => console.log(this.state)
        );
      } catch (error) {
        console.log(error);
      }
    };
    this.handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };
  }
  render() {
    return (
      <section className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email or password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="form-buttons">
            <CustomButton type="submit" className="black">
              Sign in
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              className="blue"
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </section>
    );
  }
}
