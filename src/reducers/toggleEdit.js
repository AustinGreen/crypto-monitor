import { TOGGLE_EDIT, SAVE_AMOUNTS } from '../actions/types';

const toggleEdit = (state = 'READ', action) => {
  switch (action.type) {
    case TOGGLE_EDIT:
      return state === 'READ' ? 'EDIT' : 'READ';
    case SAVE_AMOUNTS:
      return 'READ';
    default:
      return state;
  }
};

export default toggleEdit;
