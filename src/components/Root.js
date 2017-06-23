import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({ store }) =>
  <Provider store={store}>
    <App store={store} />
  </Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
