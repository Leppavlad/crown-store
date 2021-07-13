import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectDropdownVisibility } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.css";

const Header = ({ currentUser, dropdownIsShown }) => {
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
          <li className="header-nav__item header__cart">
            <CartIcon />
          </li>
        </ul>
        {dropdownIsShown ? <CartDropdown /> : null}
      </nav>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  dropdownIsShown: selectDropdownVisibility,
});

export default connect(mapStateToProps)(Header);
