import { UPDATE_PRICES, TOGGLE_EDIT, SAVE_AMOUNTS } from './types';

export const updatePrices = response => ({
  type: UPDATE_PRICES,
  response,
});

export const toggleEdit = () => ({
  type: TOGGLE_EDIT,
});

export const save = currencyData => ({
  type: SAVE_AMOUNTS,
  currencyData,
});
