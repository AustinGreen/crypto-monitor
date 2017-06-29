const prices = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PRICES':
      return action.response;
    default:
      return state;
  }
};

export default prices;
