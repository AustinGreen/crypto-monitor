import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import portfolioApp from './reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(portfolioApp, persistedState);

  store.subscribe(
    throttle(() => {
      saveState({
        amounts: store.getState().amounts
      });
    }, 1000)
  );

  return store;
};

export default configureStore;
