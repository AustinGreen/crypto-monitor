import { v4 } from 'node-uuid';

export const editAmount = amount => ({
  type: 'EDIT_AMOUNT',
  amount
});
