import React from 'react';
import PropTypes from 'prop-types';
import currencyFormatter from 'currency-formatter';
import CurrencyListItem from './shared/CurrencyListItem';
import FlexContainer from './shared/FlexContainer';

const Prices = ({ currencyData, prices }) => (
  <section className="section">
    <h1 className="title has-text-centered">Prices</h1>
    <div>
      {currencyData.map((amount, i) => (
        <FlexContainer key={amount.name}>
          <CurrencyListItem {...amount} key={amount.name}>
            {amount.name}
          </CurrencyListItem>
          <span>{currencyFormatter.format(prices[i], { code: 'USD' })}</span>
        </FlexContainer>
      ))}
    </div>
  </section>
);

Prices.propTypes = {
  currencyData: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Prices;
