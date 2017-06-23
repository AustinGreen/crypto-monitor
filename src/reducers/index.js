import { combineReducers } from 'redux';
import amounts from './amounts';
import states from './states';
import prices from './prices';

const portfolioApp = combineReducers({
  amounts,
  states,
  prices
});

export default portfolioApp;
