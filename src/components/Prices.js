import React, { Component } from 'react';
import { connect } from 'react-redux';
import currencyFormatter from 'currency-formatter';

class Prices extends Component {
  componentDidMount() {
    this.fetchPrices();
  }

  fetchPrices(currencyName) {
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=${currencyName}&tsyms=USD`)
      .then(response => response.json())
      .then(result => console.log(currencyFormatter.format(result.USD, { code: 'USD' })));
  }

  render() {
    const { currencyAmounts } = this.props;
    return (
      <section className="section" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <div className="container">
          <h1 className="title">Prices</h1>
          <ul>
            {currencyAmounts.map(amount =>
              <li key={amount.name}>{amount.name}: <a onClick={() => this.fetchPrices(amount.name)}>Get Price</a></li>
            )}
          </ul>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  currencyAmounts: state.amounts
});

export default connect(mapStateToProps, null)(Prices);
