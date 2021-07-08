import { cartActionTypes } from "./cart.types";

const initialState = {
  dropdownIsShown: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_DROPDOWN_VISIBILITY:
      return { ...state, dropdownIsShown: !state.dropdownIsShown };
    default:
      return state;
  }
};

export default cartReducer;
