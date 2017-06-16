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

const amounts = (
  state = [
    { name: 'BTC', amount: 0 },
    { name: 'ETH', amount: 0 },
    { name: 'LTC', amount: 0 },
    { name: 'ZEC', amount: 0 },
    { name: 'ETC', amount: 0 },
    { name: 'XMR', amount: 0 }
  ],
  action
) => {
  switch (action.type) {
    case 'EDIT_AMOUNT':
      return state.map(a => amount(a, action));
    default:
      return state;
  }
};

export default amounts;
