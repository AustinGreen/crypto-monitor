import { combineReducers } from 'redux';
import amounts from './amounts';
import states from './states';
import prices from './prices';
import views from './views';

const portfolioApp = combineReducers({
  amounts,
  states,
  prices,
  views,
});

export default portfolioApp;
