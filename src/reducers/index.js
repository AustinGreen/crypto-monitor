import { combineReducers } from 'redux';
import currencyData from './currencyData';
import toggleEdit from './toggleEdit';
import prices from './prices';

const rootReducer = combineReducers({
  currencyData,
  toggleEdit,
  prices,
});

export default rootReducer;
