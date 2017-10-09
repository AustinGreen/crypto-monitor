import { PRICES_UPDATE, EDIT_MODE_TOGGLE, AMOUNTS_SAVE } from './types';

export const updatePrices = response => ({
  type: PRICES_UPDATE,
  response,
});

export const toggleEdit = () => ({
  type: EDIT_MODE_TOGGLE,
});

export const save = currencyData => ({
  type: AMOUNTS_SAVE,
  currencyData,
});
