import React from 'react';
import currencyFormatter from 'currency-formatter';

const Prices = ({ currencyAmounts, prices }) =>
  <section className="section" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
    <h1 className="title">Prices</h1>
    <ul>
      {currencyAmounts.map((amount, i) =>
        <li key={amount.name}>
          {amount.name}: {currencyFormatter.format(prices[i], { code: 'USD' })}
        </li>
      )}
    </ul>
  </section>;

export default Prices;
