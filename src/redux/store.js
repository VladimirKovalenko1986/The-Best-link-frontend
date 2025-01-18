// REDUX
// import { createStore, combineReducers } from "redux";
// import { balanceReducer } from "./balanceSlice.js";
// import { localeReducer } from "./localeSlice.js";

// const rootReducer = combineReducers({
//   balance: balanceReducer,
//   locale: localeReducer,
// });

// const rootReducer = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         balance: {
//           value: state.balance.value + action.payoload,
//         },
//       };

//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           value: state.balance.value - action.payoload,
//         },
//       };

//     case "locale/changeLang":
//       return {
//         ...state,
//         locale: {
//           ...state.locale,
//           lang: action.payoload,
//         },
//       };

//     default:
//       return state;
//   }
// };

// export const store = createStore(rootReducer);
