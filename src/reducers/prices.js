const prices = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PRICES':
      console.log(action.response);
      return action.response;
    default:
      return state;
  }
};

export default prices;
