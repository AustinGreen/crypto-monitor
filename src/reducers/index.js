import { combineReducers } from 'redux';
import currencyData, * as fromCurrencyData from './currencyData';
import toggleEdit, * as fromToggleEdit from './toggleEdit';
import prices from './prices';

const rootReducer = combineReducers({
  currencyData,
  toggleEdit,
  prices,
});

export default rootReducer;

export const getEditStateAsBool = state => fromToggleEdit.getEditStateAsBool(state.toggleEdit);
export const getSimpleCurrencyData = state => fromCurrencyData.getSimpleCurrencyData(state.currencyData);
