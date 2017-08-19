import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Dashboard from './Dashboard';
import Portfolio from './Portfolio';
import Prices from './Prices';
import { Route, Redirect } from 'react-router-dom';

const App = ({ amounts }) =>
  <div>
    <Hero amounts={amounts} />
    <Dashboard>
      <Route exact path="/" render={() => <Redirect to="/prices" />} />
      <Route path="/prices" />
      <Route path="/portfolio" />
    </Dashboard>
  </div>;

App.propTypes = {
  amounts: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(state => ({
  amounts: state.amounts,
}))(App);
