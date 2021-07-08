import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import "./header.styles.css";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <Logo />
      </Link>
      <nav className="header-nav">
        <ul className="header-nav__list">
          <li className="header-nav__item">
            <Link to="/shop" className="header-nav__link">
              Shop
            </Link>
          </li>
          <li className="header-nav__item">
            <Link to="/contact" className="header-nav__link">
              Contact
            </Link>
          </li>
          <li className="header-nav__item">
            {currentUser ? (
              <div className="header-nav__link" onClick={() => auth.signOut()}>
                Sign Out
              </div>
            ) : (
              <Link className="header-nav__link" to="/auth">
                Sign in
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);