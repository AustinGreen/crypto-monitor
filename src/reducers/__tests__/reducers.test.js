import currencyData from '../currencyData';
import toggleEdit from '../toggleEdit';
import prices from '../prices';
import { PRICES_UPDATE, EDIT_MODE_TOGGLE, AMOUNTS_SAVE } from '../../actions/types';
import { previousState, newCurrencyDataState, newPriceState } from '../utils/fixtures';

describe('Reducers', () => {
  it('Reducer: currencyData', () => {
    const action = {
      type: AMOUNTS_SAVE,
      currencyData: [1.3, 6.67, 4, 1.75, 50, 5, 1.3],
    };
    const newState = currencyData(previousState.currencyData, action);
    expect(newState).toEqual(newCurrencyDataState);
  });

  it('Reducer: toggleEdit', () => {
    const action = {
      type: EDIT_MODE_TOGGLE,
    };
    const newState = toggleEdit(previousState.toggleEdit, action);
    const expectedNewState = 'EDIT';
    expect(newState).toEqual(expectedNewState);
  });

  it('Reducer: prices', () => {
    const action = {
      type: PRICES_UPDATE,
      response: newPriceState,
    };
    const newState = prices(previousState.prices, action);
    const expectedNewState = newPriceState;
    expect(newState).toEqual(expectedNewState);
  });
});
