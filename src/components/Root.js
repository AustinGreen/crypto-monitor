import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
// import { Router, Route } from 'react-router';
import App from './App';

const Root = ({ store }) =>
  <Provider store={store}>
    {/* <Router> */}
    <App store={store} />
    {/* <Route exact path="/" component={App} /> */}
    {/* </Router> */}
  </Provider>;

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
