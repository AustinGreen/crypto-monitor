import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Dashboard from './Dashboard';

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
