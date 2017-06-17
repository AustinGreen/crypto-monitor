import React from 'react';
import EditAmount from './EditAmount';
import EditButton from './EditButton';
import { toggleEdit } from '../actions';

const App = ({ store }) =>
  <div>
    <div>
      <section className="hero is-dark is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column">
              <EditButton />
            </div>
            {store.getState().amounts.map(amount => <EditAmount name={amount.name} key={amount.name} />)}
          </div>
        </div>
      </section>
    </div>
  </div>;

export default App;
