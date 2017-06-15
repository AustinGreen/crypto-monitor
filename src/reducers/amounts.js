const amount = (state, action) => {
  switch (action.type) {
    case 'EDIT_AMOUNT':
      return {
        id: action.id,
        amount: action.amount
      };
    default:
      return state;
  }
};

const amounts = (state = [], action) => {
  switch (action.type) {
    case 'EDIT_AMOUNT':
      return [...state, amount(undefined, action)];
    default:
      return state;
  }
};

export default amounts;
