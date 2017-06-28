import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';

let Root = ({ store }) =>
  <Provider store={store}>
    <App store={store} />
  </Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
