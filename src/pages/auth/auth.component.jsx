import React from "react";
import "./auth.styles.css";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const AuthPage = () => {
  return (
    <section className="auth">
      <SignIn />
      <SignUp />
    </section>
  );
};

export default AuthPage;
