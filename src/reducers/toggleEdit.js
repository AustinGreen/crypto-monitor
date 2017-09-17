import { TOGGLE_EDIT } from '../actions/types';

const toggleEdit = (state = 'READ', action) => {
  switch (action.type) {
    case TOGGLE_EDIT:
      return state === 'READ' ? 'EDIT' : 'READ';
    default:
      return state;
  }
};

export default toggleEdit;
