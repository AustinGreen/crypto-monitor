import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const logger = createLogger();

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState, applyMiddleware(logger));

  store.subscribe(throttle(() => {
    saveState({
      currencyData: store.getState().currencyData,
    });
  }, 1000));
  return store;
};

export default configureStore;
