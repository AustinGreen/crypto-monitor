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
      .then(result =>
        this.props.receivePrices(
          currencyAmounts.map(a => currencyFormatter.format(1 / result[a.name], { code: 'USD' }))
        )
      );
  }

  render() {
    console.log(this.props);
    const { currencyAmounts } = this.props;
    return (
      <section className="section" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <div className="container">
          <h1 className="title">Prices</h1>
          <ul>
            {currencyAmounts.map((amount, i) => <li key={amount.name}>{amount.name}: {this.props.prices[i]}</li>)}
          </ul>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  currencyAmounts: state.amounts,
  prices: state.prices
});

export default connect(mapStateToProps, { receivePrices })(Prices);
