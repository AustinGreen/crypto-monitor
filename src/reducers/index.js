import { combineReducers } from 'redux';
import amounts from './amounts';

const portfolioApp = combineReducers({
  amounts
});

export default portfolioApp;
