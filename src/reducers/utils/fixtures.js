import deepFreeze from 'deep-freeze';

const intitialState = {
  currencyData: [
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
  ],
  toggleEdit: 'READ',
  prices: [],
};

export const previousState = deepFreeze(intitialState);

export const newCurrencyDataState = [
  {
    name: 'BTC',
    amount: 1.3,
    fullName: 'Bitcoin',
    color: '#FF9900',
  },
  {
    name: 'ETH',
    amount: 6.67,
    fullName: 'Ethereum',
    color: '#3C3C3D',
  },
  {
    name: 'LTC',
    amount: 4,
    fullName: 'Litecoin',
    color: '#989898',
  },
  {
    name: 'ZEC',
    amount: 1.75,
    fullName: 'ZCash',
    color: '#EEAC57',
  },
  {
    name: 'ETC',
    amount: 50,
    fullName: 'Eth. Classic',
    color: '#53B75C',
  },
  {
    name: 'XMR',
    amount: 5,
    fullName: 'Monero',
    color: '#CD4A17',
  },
  {
    name: 'BCH',
    amount: 1.3,
    fullName: 'Bitcoin Cash',
    color: '#1CAADE',
  },
];

export const newPriceState = [
  4651.162790697675,
  299.4011976047904,
  51.282051282051285,
  234.5215759849906,
  11.77024482109228,
  88.41732979664013,
  324.99187520311995,
];
