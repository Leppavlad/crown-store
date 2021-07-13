import { cartActionTypes } from "./cart.types";

export const toggleDropdownVisibility = () => ({
  type: cartActionTypes.TOGGLE_DROPDOWN_VISIBILITY,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (id) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: id,
});

export const increaseQuantity = (id) => ({
  type: cartActionTypes.INCREASE_QUANTITY,
  payload: id,
});

export const decreaseQuantity = (id) => ({
  type: cartActionTypes.DECREASE_QUANTITY,
  payload: id,
});
