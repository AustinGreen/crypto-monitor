import React, { Component } from 'react';
import * as or from 'orama';
import PropTypes from 'prop-types';
import currencyFormatter from 'currency-formatter';
import CurrencyListItem from './shared/CurrencyListItem';
import FlexContainer from './shared/FlexContainer';

class Portfolio extends Component {
  displayTotalPortfolio() {
    const { currencyData, prices } = this.props;
    return currencyFormatter.format(currencyData.map((a, i) => a.amount * prices[i]).reduce((a, b) => a + b), {
      code: 'USD',
    });
  }

  render() {
    const { currencyData, prices } = this.props;
    const chartData = currencyData.map((currency, i) => ({
      currency: currency.name,
      name: currency.fullName,
      value: prices[i] * currency.amount,
      color: currency.color,
    }));
    return (
      <section className="section">
        <h1 className="title has-text-centered">Total Portfolio: {this.displayTotalPortfolio()}</h1>
        <div>
          <or.Chart yZeroBased yTooltipFormat={value => currencyFormatter.format(value, { code: 'USD' })}>
            <or.Bars
              yName="Value"
              xName="Currency"
              data={chartData}
              fillValue={(value, currency) => currency.color}
              x="currency"
              y="value"
            />
          </or.Chart>
          {currencyData.map((amount, i) => (
            <FlexContainer key={amount.name}>
              <CurrencyListItem {...amount} key={amount.name}>
                {amount.fullName}
              </CurrencyListItem>
              <span>{currencyFormatter.format(amount.amount * prices[i], { code: 'USD' })}</span>
            </FlexContainer>
          ))}
        </div>
      </section>
    );
  }
}

Portfolio.propTypes = {
  currencyData: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Portfolio;
