import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Dashboard from './Dashboard';

const App = ({ amounts }) =>
  <div>
    <Hero amounts={amounts} />
    <Dashboard />
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
