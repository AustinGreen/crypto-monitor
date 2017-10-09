import { AMOUNTS_SAVE } from '../actions/types';

const amount = (state, action, i) => {
  switch (action.type) {
    case AMOUNTS_SAVE:
      return {
        ...state,
        amount: action.currencyData[i],
      };
    default:
      return state;
  }
};

const defaultState = [
  {
    name: 'BTC',
    amount: 0,
    fullName: 'Bitcoin',
    color: '#FF9900',
  },
  {
    name: 'ETH',
    amount: 0,
    fullName: 'Ethereum',
    color: '#3C3C3D',
  },
  {
    name: 'LTC',
    amount: 0,
    fullName: 'Litecoin',
    color: '#989898',
  },
  {
    name: 'ZEC',
    amount: 0,
    fullName: 'ZCash',
    color: '#EEAC57',
  },
  {
    name: 'ETC',
    amount: 0,
    fullName: 'Eth. Classic',
    color: '#53B75C',
  },
  {
    name: 'XMR',
    amount: 0,
    fullName: 'Monero',
    color: '#CD4A17',
  },
  {
    name: 'BCH',
    amount: 0,
    fullName: 'Bitcoin Cash',
    color: '#1CAADE',
  },
];

const currencyData = (state = defaultState, action) => {
  switch (action.type) {
    case AMOUNTS_SAVE:
      return state.map((a, i) => amount(a, action, i));
    default:
      return state;
  }
};

export default currencyData;

export const getSimpleCurrencyData = (state) => {
  const simpleCurrencyData = Object.create(null);
  state.map((currency) => {
    simpleCurrencyData[currency.name] = currency.amount;
    return currency;
  });
  return simpleCurrencyData;
};
