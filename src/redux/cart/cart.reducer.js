import { cartActionTypes } from "./cart.types";

import {
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "./cart.utils";

const initialState = {
  dropdownIsShown: false,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_DROPDOWN_VISIBILITY:
      return { ...state, dropdownIsShown: !state.dropdownIsShown };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: increaseQuantity(state.cartItems, action.payload),
      };
    case cartActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
