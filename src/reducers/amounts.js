import { EDIT_AMOUNT, SAVE_AMOUNTS } from '../actions/types';

const amount = (state, action, i) => {
  switch (action.type) {
    case EDIT_AMOUNT:
      if (state.name !== action.name) {
        return state;
      }
      return {
        ...state,
        amount: action.amount,
      };
    case SAVE_AMOUNTS:
      return {
        ...state,
        amount: action.amounts[i],
      };
    default:
      return state;
  }
};

const amounts = (
  state = [
    { name: 'BTC', amount: 0, fullName: 'Bitcoin', color: '#FF9900' },
    { name: 'ETH', amount: 0, fullName: 'Ethereum', color: '#3C3C3D' },
    { name: 'LTC', amount: 0, fullName: 'Litecoin', color: '#989898' },
    { name: 'ZEC', amount: 0, fullName: 'ZCash', color: '#EEAC57' },
    { name: 'ETC', amount: 0, fullName: 'Eth. Classic', color: '#53B75C' },
    { name: 'XMR', amount: 0, fullName: 'Monero', color: '#CD4A17' },
    { name: 'BCH', amount: 0, fullName: 'Bitcoin Cash', color: '#1CAADE' },
  ],
  action,
) => {
  switch (action.type) {
    case EDIT_AMOUNT:
      return state.map(a => amount(a, action));
    case SAVE_AMOUNTS:
      return state.map((a, i) => amount(a, action, i));
    default:
      return state;
  }
};

export default amounts;
