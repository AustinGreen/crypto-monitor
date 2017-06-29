import React from 'react';
import Hero from './Hero';
import Dashboard from './Dashboard';

const App = ({ store }) =>
  <div>
    <Hero store={store} />
    <Dashboard />
  </div>;

export default App;
