import { cartActionTypes } from "./cart.types";

export const toggleDropdownVisibility = () => ({
  type: cartActionTypes.TOGGLE_DROPDOWN_VISIBILITY,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
