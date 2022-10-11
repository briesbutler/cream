import * as Actions from "./actions";
import initialState from "../store/initialState";
export const UserReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case Actions.SIGN_UP:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_OUT:
      return {
        ...state,
      };
    case Actions.GET_USER:
      return {
        ...state,
        ...action.payload.user,
        results: [...state.results, ...action.payload.user.results],
      };
    default:
      return state;
  }
};
