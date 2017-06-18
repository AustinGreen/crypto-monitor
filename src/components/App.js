import React from 'react';
import EditAmount from './EditAmount';
import EditButton from './EditButton';
import Prices from './Prices';
import { toggleEdit } from '../actions';

const App = ({ store }) =>
  <div>
    <div>
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <EditButton />
              </div>
              {store
                .getState()
                .amounts.map(amount => <EditAmount fullName={amount.fullName} name={amount.name} key={amount.name} />)}
            </div>
          </div>
        </div>
      </section>
      <Prices />
    </div>
  </div>;

export default App;
