import React, { Component } from 'react';
import currencyFormatter from 'currency-formatter';
import { connect } from 'react-redux';
import { receivePrices } from '../actions';

class Prices extends Component {
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
    console.log(this.props);
    const { currencyAmounts } = this.props;
    return (
      <div className="columns" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="column">
          <section className="section" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <h1 className="title">Prices</h1>
            <ul>
              {currencyAmounts.map((amount, i) =>
                <li key={amount.name}>
                  {amount.name}: {currencyFormatter.format(this.props.prices[i], { code: 'USD' })}
                </li>
              )}
            </ul>
          </section>
        </div>
        <div className="column">
          <section className="section" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <h1 className="title">Portfolio</h1>
            <ul>
              {currencyAmounts.map((amount, i) =>
                <li key={amount.name}>
                  {amount.name}: {currencyFormatter.format(amount.amount * this.props.prices[i], { code: 'USD' })}
                </li>
              )}
              <li>
                Total:{' '}
                {currencyFormatter.format(
                  currencyAmounts.map((a, i) => a.amount * this.props.prices[i]).reduce((a, b) => a + b),
                  { code: 'USD' }
                )}
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currencyAmounts: state.amounts,
  prices: state.prices
});

export default connect(mapStateToProps, { receivePrices })(Prices);
