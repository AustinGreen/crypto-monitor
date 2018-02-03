import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Hero from './Hero';
import Dashboard from './Dashboard';
import Portfolio from './Portfolio';
import Prices from './Prices';

const App = () => (
  <div>
    <Hero />
    <Route exact path="/" render={() => <Redirect to="/prices" />} />
    <Route
      path="/prices"
      render={() => (
        <Dashboard>{(_, currencyData, prices) => <Prices currencyData={currencyData} prices={prices} />}</Dashboard>
      )}
    />
    <Route
      path="/portfolio"
      render={() => (
        <Dashboard>
          {(fetchPrices, currencyData, prices) => (
            <Portfolio fetchPrices={fetchPrices} currencyData={currencyData} prices={prices} />
          )}
        </Dashboard>
      )}
    />
  </div>
);

export default App;
