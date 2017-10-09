import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Hero from './Hero';
import Dashboard from './Dashboard';

const App = () => (
  <div>
    <Hero />
    <Dashboard>
      <Route exact path="/" render={() => <Redirect to="/prices" />} />
      <Route path="/prices" />
      <Route path="/portfolio" />
    </Dashboard>
  </div>
);

export default App;
