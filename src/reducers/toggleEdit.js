import { EDIT_MODE_TOGGLE, AMOUNTS_SAVE } from '../actions/types';

const toggleEdit = (state = 'READ', action) => {
  switch (action.type) {
    case EDIT_MODE_TOGGLE:
      return state === 'READ' ? 'EDIT' : 'READ';
    case AMOUNTS_SAVE:
      return 'READ';
    default:
      return state;
  }
};

export default toggleEdit;

export const getEditStateAsBool = state => state === 'EDIT';
