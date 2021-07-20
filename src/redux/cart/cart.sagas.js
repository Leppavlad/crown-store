import { put, all, call, takeLatest } from "redux-saga/effects";

import { userActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* emptyCart() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, emptyCart);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
