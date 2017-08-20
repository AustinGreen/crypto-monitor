import React from 'react';
import PropTypes from 'prop-types';
import currencyFormatter from 'currency-formatter';
import FontAwesome from 'react-fontawesome';
import CurrencyListItem from './shared/CurrencyListItem';
import FlexContainer from './shared/FlexContainer';

const Prices = ({ currencyAmounts, prices, fetchPrices }) =>
  <section className="section">
    <h1 className="title has-text-centered">Prices</h1>
    <div>
      {currencyAmounts.map((amount, i) =>
        <FlexContainer key={amount.name}>
          <CurrencyListItem {...amount} key={amount.name}>
            {amount.name}
          </CurrencyListItem>
          <span>
            {currencyFormatter.format(prices[i], { code: 'USD' })}
          </span>
        </FlexContainer>,
      )}
    </div>
    <button className="button is-dark" onClick={() => fetchPrices(currencyAmounts)} style={{ float: 'right' }}>
      <span className="icon">
        <FontAwesome name="refresh" />
      </span>
      <span>Update Prices</span>
    </button>
  </section>;

Prices.propTypes = {
  currencyAmounts: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  fetchPrices: PropTypes.func.isRequired,
};

export default Prices;
