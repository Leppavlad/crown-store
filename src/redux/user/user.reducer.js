import { userActionTypes } from "./user.types";

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_UP_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
      return { ...state, error: action.payload };
    case userActionTypes.CHECK_USER_SESSION:
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
