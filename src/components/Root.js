import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Root = ({ store }) =>
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>;

Root.propTypes = {
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    replaceReducer: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
  }).isRequired,
};

export default Root;
