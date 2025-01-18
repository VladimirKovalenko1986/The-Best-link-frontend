export const changeLang = (newLang) => {
  return {
    type: "locale/changeLang",
    payoload: newLang,
  };
};

export const localeReducer = (state = { lang: "uk" }, action) => {
  switch (action.type) {
    case "locale/changeLang":
      return {
        ...state,
        lang: action.payoload,
      };
    default:
      return state;
  }
};
