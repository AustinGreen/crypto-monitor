import React from 'react';
import EditAmount from './EditAmount';
import Button from './Button';
import Prices from './Prices';
import { toggleEdit } from '../actions';

const App = ({ store }) =>
    <div>
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <Button buttonType="Edit" />
              </div>
              <div className="column">
                <Button buttonType="Save" />
              </div>
              {store
                .getState()
                .amounts.map(amount => <EditAmount fullName={amount.fullName} name={amount.name} key={amount.name} />)}
            </div>
          </div>
        </div>
      </section>
      <Prices />
    </div>;

export default App;
