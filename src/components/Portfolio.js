import React from 'react';
import currencyFormatter from 'currency-formatter';

const Portfolio = ({ currencyAmounts, prices }) =>
  <section className="section" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
    <h1 className="title">Portfolio</h1>
    <ul>
      {currencyAmounts.map((amount, i) =>
        <li key={amount.name}>
          {amount.name}: {currencyFormatter.format(amount.amount * prices[i], { code: 'USD' })}
        </li>
      )}
      <li>
        Total:{' '}
        {currencyFormatter.format(currencyAmounts.map((a, i) => a.amount * prices[i]).reduce((a, b) => a + b), {
          code: 'USD'
        })}
      </li>
    </ul>
  </section>;

export default Portfolio;
