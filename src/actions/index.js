import { UPDATE_PRICES, TOGGLE_EDIT_MODE, SAVE_AMOUNTS } from './types';

export const updatePrices = response => ({
  type: UPDATE_PRICES,
  payload: {
    response,
  },
});

export const toggleEdit = () => ({
  type: TOGGLE_EDIT_MODE,
});

export const save = amounts => ({
  type: SAVE_AMOUNTS,
  payload: {
    amounts,
  },
});
