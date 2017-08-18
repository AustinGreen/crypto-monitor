import React from 'react';
import Hero from './Hero';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';

const App = ({ amounts }) =>
  <div>
    <Hero amounts={amounts} />
    <Dashboard />
  </div>;

export default connect(state => ({
  amounts: state.amounts,
}))(App);
