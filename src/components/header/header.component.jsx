import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectDropdownVisibility } from "../../redux/cart/cart.selectors";

import { signOutStart } from "../../redux/user/user.actions";

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

const TheHeader = ({ currentUser, dropdownIsShown, signOutStart }) => {
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
              <MenuLink as="div" onClick={signOutStart}>
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

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TheHeader);
