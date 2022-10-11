import * as Actions from "./actions";
import initialState from "../store/initialState";

export const CartsReducer = (state = initialState.carts, action) => {
  switch (action.type) {
    case Actions.FETCH_CART:
      return {
        // count: action.count,
        results: action.results,
        subtotal: action.subtotal,
      };
    case Actions.ADD_CART:
      return {
        results: action.results,
        subtotal: action.subtotal,
      };
    case Actions.INCREASE_CART:
      return {
        // results: action.results,
        results: action.results,
        subtotal: action.subtotal,
      };
    case Actions.DECREASE_CART:
      return {
        results: action.results,
        subtotal: action.subtotal,
      };
    default:
      return state;
  }
};

//         ...state,
//         ...action.payload.carts,
//         results: [
//           ...state.results,
//           ...action.payload.carts.results,
//           // ...action.subtotal,
//         ],
//         subtotal: action.subtotal,
//       };
//     case Actions.ADD_CART:
//       return {
//         results: action.payload,
//         subtotal: action.subtotal,
//       };
//     case Actions.INCREASE_CART:
//       return {
//         results: action.results,
//         subtotal: action.subtotal,
//       };
//     case Actions.DECREASE_CART:
//       return {
//         results: action.results,
//         subtotal: action.subtotal,
//       };
//     default:
//       return state;
//   }
// };
