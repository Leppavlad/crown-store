import { cartActionTypes } from "./cart.types";

import { addItemToCart } from "./cart.utils";

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
    default:
      return state;
  }
};

export default cartReducer;
