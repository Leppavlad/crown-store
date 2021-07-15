import React from "react";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectDropdownVisibility } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
  Header,
  HeaderLogo,
  HeaderNav,
  MenuList,
  MenuListItem,
  MenuLink,
} from "./header.styles";

const TheHeader = ({ currentUser, dropdownIsShown }) => {
  return (
    <Header>
      <HeaderLogo to="/">
        <Logo />
      </HeaderLogo>
      <HeaderNav>
        <MenuList>
          <MenuListItem>
            <MenuLink to="/shop">Shop</MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/contact">Contact</MenuLink>
          </MenuListItem>
          <MenuListItem>
            {currentUser ? (
              <MenuLink as="div" onClick={() => auth.signOut()}>
                Sign Out
              </MenuLink>
            ) : (
              <MenuLink to="/auth">Sign in</MenuLink>
            )}
          </MenuListItem>
          <MenuListItem>
            <CartIcon />
          </MenuListItem>
        </MenuList>
        {dropdownIsShown ? <CartDropdown /> : null}
      </HeaderNav>
    </Header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  dropdownIsShown: selectDropdownVisibility,
});

export default connect(mapStateToProps)(TheHeader);
