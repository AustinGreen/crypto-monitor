import React from 'react';
import currencyFormatter from 'currency-formatter';
import { CurrencyListItem } from './shared/CurrencyListItem';
import { FlexContainer } from './shared/FlexContainer';
import { receivePrice } from '../actions';
import FontAwesome from 'react-fontawesome';
import Websocket from 'react-websocket';

const handleData = (data) => {
  const result = JSON.parse(data);
  console.log(result);
};

const Prices = ({ currencyAmounts, prices, fetchPrices }) =>
  <section className="section">
    <Websocket url="wss://ws.blockchain.info/inv" onMessage={handleData} />
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
    <a className="button is-dark" onClick={() => fetchPrices(currencyAmounts)} style={{ float: 'right' }}>
      <span className="icon">
        <FontAwesome name="refresh" />
      </span>
      <span>Update Prices</span>
    </a>
  </section>;

export default Prices;
