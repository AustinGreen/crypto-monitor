import { EDIT_AMOUNT, SAVE_AMOUNTS } from '../actions/types';

const defaultAmounts = [
  { name: 'BTC', amount: 0, fullName: 'Bitcoin', color: '#FF9900' },
  { name: 'ETH', amount: 0, fullName: 'Ethereum', color: '#3C3C3D' },
  { name: 'LTC', amount: 0, fullName: 'Litecoin', color: '#989898' },
  { name: 'ZEC', amount: 0, fullName: 'ZCash', color: '#EEAC57' },
  { name: 'ETC', amount: 0, fullName: 'Eth. Classic', color: '#53B75C' },
  { name: 'XMR', amount: 0, fullName: 'Monero', color: '#CD4A17' },
  { name: 'BCH', amount: 0, fullName: 'Bitcoin Cash', color: '#1CAADE' },
];

const amount = (state, action, i) => {
  switch (action.type) {
    case SAVE_AMOUNTS:
      return {
        ...state,
        amount: action.payload.amounts[i],
      };
    default:
      return state;
  }
};

const amounts = (state = defaultAmounts, action) => {
  switch (action.type) {
    case SAVE_AMOUNTS:
      return state.map((a, i) => amount(a, action, i));
    default:
      return state;
  }
};

export default amounts;
