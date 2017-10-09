import currencyData from '../currencyData';
import toggleEdit from '../toggleEdit';
import prices from '../prices';
import { UPDATE_PRICES, TOGGLE_EDIT, SAVE_AMOUNTS } from '../../actions/types';
import { previousState, newCurrencyDataState, newPriceState } from '../utils/fixtures';

describe('Reducers', () => {
  it('Reducer: currencyData', () => {
    const action = {
      type: SAVE_AMOUNTS,
      currencyData: [1.3, 6.67, 4, 1.75, 50, 5, 1.3],
    };
    const newState = currencyData(previousState.currencyData, action);
    expect(newState).toEqual(newCurrencyDataState);
  });

  it('Reducer: toggleEdit', () => {
    const action = {
      type: TOGGLE_EDIT,
    };
    const newState = toggleEdit(previousState.toggleEdit, action);
    const expectedNewState = 'EDIT';
    expect(newState).toEqual(expectedNewState);
  });

  it('Reducer: prices', () => {
    const action = {
      type: UPDATE_PRICES,
      response: newPriceState,
    };
    const newState = prices(previousState.prices, action);
    const expectedNewState = newPriceState;
    expect(newState).toEqual(expectedNewState);
  });
});
