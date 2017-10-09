import { PRICES_UPDATE } from '../actions/types';

const prices = (state = [], action) => {
  switch (action.type) {
    case PRICES_UPDATE:
      return action.response;
    default:
      return state;
  }
};

export default prices;
