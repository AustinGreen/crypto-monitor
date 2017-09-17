import { UPDATE_PRICES } from '../actions/types';

const prices = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PRICES:
      return action.response;
    default:
      return state;
  }
};

export default prices;
