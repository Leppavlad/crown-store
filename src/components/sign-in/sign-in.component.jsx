import React from "react";
import { connect } from "react-redux";
import "./sign-in.styles.css";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = async (event) => {
      event.preventDefault();
      const { signInWithEmail } = this.props;
      const { email, password } = this.state;
      signInWithEmail(email, password);
    };
    this.handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };
  }
  render() {
    const { signInWithGoogle } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithEmail: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
