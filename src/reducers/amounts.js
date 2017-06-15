const amount = (state, action) => {
  switch (action.type) {
    case 'EDIT_AMOUNT':
      if (state.name !== action.name) {
        return state;
      }
      return {
        ...state,
        amount: action.amount
      };
    default:
      return state;
  }
};

const amounts = (state = [{ name: 'BTC', amount: 1 }], action) => {
  switch (action.type) {
    case 'EDIT_AMOUNT':
      return state.map(a => amount(a, action));
    default:
      return state;
  }
};

export default amounts;
