// REDUX
// import { createStore, combineReducers } from "redux";
// import balanceReducer from "./balanceSlice.js";
// import localeReducer from "./localeSlice.js";

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

// REDUX TOOLKIT
// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const balancePersistConfig = {
//   key: "balanceValue",
//   storage,
//   whitelist: ["value"],
// };

// const pBalanceReducer = persistReducer(balancePersistConfig, balanceReducer);

// export const store = configureStore({
//   reducer: {
//     balance: pBalanceReducer,
//     locale: localeReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

/* Async REDUX */

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../redux/tasksSlice.js";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
