import { combineReducers } from 'redux';
import amounts from './amounts';
import toggleEdit from './toggleEdit';
import prices from './prices';

const rootReducer = combineReducers({
  amounts,
  toggleEdit,
  prices,
});

export default rootReducer;
