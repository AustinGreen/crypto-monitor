import React, { Component } from 'react';
import PropTypes from 'prop-types';
import currencyFormatter from 'currency-formatter';
import CurrencyListItem from './shared/CurrencyListItem';
import FlexContainer from './shared/FlexContainer';
import { RadialChart } from 'react-vis';

let myData = [{ angle: 0 }];

class Portfolio extends Component {
  constructor() {
    super();
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart() {
    const { currencyAmounts, prices } = this.props;
    myData = currencyAmounts.map((amount, i) => ({
      angle: Math.round(amount.amount * prices[i]),
      label: amount.fullName,
      color: amount.color,
    }));
    return (
      <RadialChart
        colorDomain={[0, 100]}
        colorRange={[0, 10]}
        colorType="literal"
        innerRadius={100}
        radius={140}
        showLabels
        data={myData}
        width={600}
        height={300}
        animation
      />
    );
  }

  render() {
    const { currencyAmounts, prices } = this.props;
    return (
      <section className="section">
        <h1 className="title has-text-centered">
          Total Portfolio:{' '}
          {currencyFormatter.format(currencyAmounts.map((a, i) => a.amount * prices[i]).reduce((a, b) => a + b), {
            code: 'USD',
          })}
        </h1>
        {this.updateChart()}
        <div>
          {currencyAmounts.map((amount, i) =>
            <FlexContainer key={amount.name}>
              <CurrencyListItem {...amount} key={amount.name}>
                {amount.fullName}
              </CurrencyListItem>
              <span>
                {currencyFormatter.format(amount.amount * prices[i], { code: 'USD' })}
              </span>
            </FlexContainer>,
          )}
        </div>
      </section>
    );
  }
}

Portfolio.propTypes = {
  currencyAmounts: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default Portfolio;
