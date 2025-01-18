export const deposit = (value) => {
  return {
    type: "balance/deposit",
    payoload: value,
  };
};

export const withdraw = (value) => {
  return {
    type: "balance/withdraw",
    payoload: value,
  };
};

export const balanceReducer = (state = { value: 1000 }, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        value: state.value + action.payoload,
      };

    case "balance/withdraw":
      return {
        ...state,
        value: state.value - action.payoload,
      };

    default:
      return state;
  }
};
