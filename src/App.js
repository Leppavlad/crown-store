import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

import TheHeader from "./components/header/header.component";

import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import AuthPage from "./pages/auth/auth.component";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <TheHeader />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/auth"
              render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
