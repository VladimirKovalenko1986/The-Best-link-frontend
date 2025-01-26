import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
// REDUX TOOLKIT

// export const changeLang = createAction("locale/changeLang");

// export const localeReducer = createReducer({ lang: "uk" }, (builder) => {
//   builder.addCase(changeLang, (state, action) => {
//     state.lang = action.payload;
//   });
// });

// REDUX
// export const changeLang = (newLang) => {
//   return {
//     type: "locale/changeLang",
//     payoload: newLang,
//   };
// };

// export const localeReducer = (state = { lang: "uk" }, action) => {
//   switch (action.type) {
//     case "locale/changeLang":
//       return {
//         ...state,
//         lang: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// Slice REDUX TOOLKIT

// const slice = createSlice({
//   name: "locale",
//   initialState: { lang: "uk" },
//   reducers: {
//     changeLang: (state, action) => {
//       state.lang = action.payload;
//     },
//   },
// });

// export const { changeLang } = slice.actions;
// export default slice.reducer;
