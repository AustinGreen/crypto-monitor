import { UPDATE_PRICES, EDIT_AMOUNT, TOGGLE_EDIT, SAVE_AMOUNTS } from './types';

export const updatePrices = response => ({
  type: UPDATE_PRICES,
  response,
});

export const editAmount = (amount, name) => ({
  type: EDIT_AMOUNT,
  name,
  amount,
});

export const toggleEdit = () => ({
  type: TOGGLE_EDIT,
});

export const save = amounts => ({
  type: SAVE_AMOUNTS,
  amounts,
});
