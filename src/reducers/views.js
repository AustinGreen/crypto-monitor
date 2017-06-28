const states = (state = 'PRICES', action) => {
  switch (action.type) {
    case 'TOGGLE_VIEW':
      console.log(action, state);
      if (action.view === state) return state;
      return state === 'PORTFOLIO' ? 'PRICES' : 'PORTFOLIO';
    default:
      return state;
  }
};

export default states;
