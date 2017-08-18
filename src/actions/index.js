// import { v4 } from 'node-uuid';

export const receivePrices = response => ({
  type: 'RECEIVE_PRICES',
  response,
});

export const editAmount = (amount, name) => ({
  type: 'EDIT_AMOUNT',
  name,
  amount,
});

export const toggleEdit = () => ({
  type: 'TOGGLE_EDIT',
});

export const toggleView = view => ({
  type: 'TOGGLE_VIEW',
  view,
});

export const save = amounts => ({
  type: 'SAVE_AMOUNTS',
  amounts,
});
