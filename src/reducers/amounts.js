const amount = (state, action, i) => {
  switch (action.type) {
    case 'EDIT_AMOUNT':
      if (state.name !== action.name) {
        return state;
      }
      return {
        ...state,
        amount: action.amount
      };
    case 'SAVE_AMOUNTS':
      return {
        ...state,
        amount: action.amounts[i]
      };
    default:
      return state;
  }
};

const amounts = (
  state = [
    { name: 'BTC', amount: 0, fullName: 'Bitcoin' },
    { name: 'ETH', amount: 0, fullName: 'Ethereum' },
    { name: 'LTC', amount: 0, fullName: 'Litecoin' },
    { name: 'ZEC', amount: 0, fullName: 'ZCash' },
    { name: 'ETC', amount: 0, fullName: 'Ethereum Classic' },
    { name: 'XMR', amount: 0, fullName: 'Monero' }
  ],
  action
) => {
  switch (action.type) {
    case 'EDIT_AMOUNT':
      return state.map(a => amount(a, action));
    case 'SAVE_AMOUNTS':
      return state.map((a, i) => amount(a, action, i));
    default:
      return state;
  }
};

export default amounts;
