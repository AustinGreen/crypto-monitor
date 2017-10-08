import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Dashboard from './Dashboard';

const App = ({ currencyData }) => (
  <div>
    <Hero currencyData={currencyData} />
    <Dashboard>
      <Route exact path="/" render={() => <Redirect to="/prices" />} />
      <Route path="/prices" />
      <Route path="/portfolio" />
    </Dashboard>
  </div>
);

App.propTypes = {
  currencyData: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(state => ({
  currencyData: state.currencyData,
}))(App);
