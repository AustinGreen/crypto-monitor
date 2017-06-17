const states = (state = 'READ', action) => {
  switch (action.type) {
    case 'TOGGLE_EDIT':
      return state === 'READ' ? 'EDIT' : 'READ';
    default:
      return state;
  }
};

export default states;
