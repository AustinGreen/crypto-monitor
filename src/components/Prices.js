import React from 'react';
import { connect } from 'react-redux';

const Prices = ({ currencyAmounts }) =>
  <section className="section" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
    <div className="container">
      <h1 className="title">Prices</h1>
      <ul>
        {currencyAmounts.map(amount => <li key={amount.name}>{amount.name}: $2,000</li>)}
      </ul>
    </div>
  </section>;

const mapStateToProps = state => ({
  currencyAmounts: state.amounts
});

export default connect(mapStateToProps, null)(Prices);
