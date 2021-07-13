import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectDropdownVisibility = createSelector(
  [selectCart],
  (cart) => cart.dropdownIsShown
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((sum, item) => sum + item.quantity, 0)
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
