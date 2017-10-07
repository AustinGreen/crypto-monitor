import { TOGGLE_EDIT_MODE } from '../actions/types';

const toggleEdit = (state = 'READ', action) => {
  switch (action.type) {
    case TOGGLE_EDIT_MODE:
      return state === 'READ' ? 'EDIT' : 'READ';
    default:
      return state;
  }
};

export default toggleEdit;
