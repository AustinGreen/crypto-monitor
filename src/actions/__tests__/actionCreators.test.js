import { updatePrices, toggleEdit, save } from '../';
import { PRICES_UPDATE, EDIT_MODE_TOGGLE, AMOUNTS_SAVE } from '../types';

describe('Action Creators', () => {
  it('Action Creator: updatePrices', () => {
    const response = [
      4651.162790697675,
      299.4011976047904,
      51.282051282051285,
      234.5215759849906,
      11.77024482109228,
      88.41732979664013,
      324.99187520311995,
    ];
    expect(updatePrices(response)).toEqual({ type: PRICES_UPDATE, response });
  });

  it('Action Creator: toggleEdit', () => {
    expect(toggleEdit()).toEqual({ type: EDIT_MODE_TOGGLE });
  });

  it('Action Creator: save', () => {
    const currencyData = [
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
    expect(save(currencyData)).toEqual({ type: AMOUNTS_SAVE, currencyData });
  });
});
