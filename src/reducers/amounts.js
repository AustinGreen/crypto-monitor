const amount = (state, action) => {
  switch (action.type) {
    case 'EDIT_AMOUNT':
      return {
        BTC: action.amount
      };
    default:
      return state;
  }
};

const amounts = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_AMOUNT':
      const updatedAmounts = Object.assign(state, amount(undefined, action));
      return updatedAmounts;
    default:
      return state;
  }
};

export default amounts;
