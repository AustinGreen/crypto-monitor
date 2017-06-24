import React, { Component } from 'react';
import currencyFormatter from 'currency-formatter';
import { connect } from 'react-redux';
import { receivePrices } from '../actions';
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
    const { currencyAmounts, prices } = this.props;
    return (
      <div className="columns" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="column">
          <Prices currencyAmounts={currencyAmounts} prices={prices} />
        </div>
        <div className="column">
          <Portfolio currencyAmounts={currencyAmounts} prices={prices} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currencyAmounts: state.amounts,
  prices: state.prices
});

export default connect(mapStateToProps, { receivePrices })(Dashboard);
