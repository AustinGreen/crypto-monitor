import React, { Component } from 'react';
import currencyFormatter from 'currency-formatter';
import { connect } from 'react-redux';
import { receivePrices, toggleView } from '../actions';
import { Switch } from './shared/Switch';
import Prices from './Prices';
import Portfolio from './Portfolio';

class Dashboard extends Component {
  componentDidMount() {
    this.fetchPrices(this.props.currencyAmounts);
  }

  fetchPrices(currencyAmounts) {
    const currencyString = currencyAmounts.map(a => a.name).toString();
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${currencyString}`)
      .then(response => response.json())
      .then(result => this.props.receivePrices(currencyAmounts.map(a => 1 / result[a.name])));
  }

  render() {
    const { currencyAmounts, prices, toggleView, view } = this.props;
    return (
      <div className="container">
        <Switch className="field has-addons">
          <p className="control">
            <a
              className={view === 'PRICES' ? 'button is-active' : 'button'}
              onClick={() => {
                toggleView('PRICES');
              }}
            >
              <span>Prices</span>
            </a>
          </p>
          <p className="control">
            <a
              className={view === 'PRICES' ? 'button' : 'button is-active'}
              onClick={() => {
                toggleView('PORTFOLIO');
              }}
            >
              <span>Portfolio</span>
            </a>
          </p>
        </Switch>
        <div className="column is-half is-offset-one-quarter">
          {view === 'PRICES'
            ? <Prices currencyAmounts={currencyAmounts} prices={prices} />
            : <Portfolio currencyAmounts={currencyAmounts} prices={prices} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currencyAmounts: state.amounts,
  prices: state.prices,
  view: state.views
});

export default connect(mapStateToProps, { receivePrices, toggleView })(Dashboard);
