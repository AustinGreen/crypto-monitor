import { PRICES_UPDATE, EDIT_MODE_TOGGLE, AMOUNTS_SAVE } from './types';

const updatePrices = response => ({
  type: PRICES_UPDATE,
  response,
});

export const getPrices = currencyData => dispatch =>
  fetch(`https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${currencyData.map(currency => currency.name).join()}`)
    .then(response => response.json())
    .then((result) => {
      const pricesUSD = currencyData.map(crypto => 1 / result[crypto.name]);
      dispatch(updatePrices(pricesUSD));
    })
    .catch(err => err);

export const toggleEdit = () => ({
  type: EDIT_MODE_TOGGLE,
});

export const save = currencyData => ({
  type: AMOUNTS_SAVE,
  currencyData,
});
