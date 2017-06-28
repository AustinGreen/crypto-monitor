import React from 'react';
import currencyFormatter from 'currency-formatter';
import { CurrencyListItem } from './shared/CurrencyListItem';
import { FlexContainer } from './shared/FlexContainer';

const Prices = ({ currencyAmounts, prices }) =>
  <section className="section">
    <h1 className="title has-text-centered">Prices</h1>
    <div>
      {currencyAmounts.map((amount, i) =>
        <FlexContainer key={amount.name}>
          <CurrencyListItem {...amount} key={amount.name}>
            {amount.name}
          </CurrencyListItem>
          <span>{currencyFormatter.format(prices[i], { code: 'USD' })}</span>
        </FlexContainer>
      )}
    </div>
  </section>;

export default Prices;
