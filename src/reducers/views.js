const states = (state = 'PRICES', action) => {
  switch (action.type) {
    case 'TOGGLE_VIEW':
      if (action.view === state) return state;
      return state === 'PORTFOLIO' ? 'PRICES' : 'PORTFOLIO';
    default:
      return state;
  }
};

export default states;
