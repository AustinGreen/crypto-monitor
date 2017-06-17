import { combineReducers } from 'redux';
import amounts from './amounts';
import states from './states';

const portfolioApp = combineReducers({
  amounts,
  states
});

export default portfolioApp;
