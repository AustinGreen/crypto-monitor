import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import currencyFormatter from 'currency-formatter';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receivePrices } from '../actions';
import { Switch } from './shared/Switch';
import Prices from './Prices';
import Portfolio from './Portfolio';

class Dashboard extends Component {
  componentDidMount() {
    this.fetchPrices(this.props.currencyAmounts);
  }

  fetchPrices(currencyAmounts) {
    const { receivePrices } = this.props;
    const currencyString = currencyAmounts.map(a => a.name).toString();
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${currencyString}`)
      .then(response => response.json())
      .then(result => receivePrices(currencyAmounts.map(a => 1 / result[a.name])));
  }

  render() {
    const { currencyAmounts, prices } = this.props;
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        render: () => {
          if (child.props.render) {
            return child;
          }
          if (child.props.path.includes('portfolio')) {
            return <Portfolio currencyAmounts={currencyAmounts} prices={prices} />;
          }
          return <Prices currencyAmounts={currencyAmounts} prices={prices} fetchPrices={this.fetchPrices.bind(this)} />;
        },
      }),
    );
    return (
      <div className="container">
        <Switch className="field has-addons">
          <p className="control">
            <NavLink className="button" activeClassName="is-active" to="/prices">
              <span>Prices</span>
            </NavLink>
          </p>
          <p className="control">
            <NavLink className="button" activeClassName="is-active" to="/portfolio">
              <span>Portfolio</span>
            </NavLink>
          </p>
        </Switch>
        <div className="column is-half is-offset-one-quarter">
          {children}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  currencyAmounts: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  receivePrices: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currencyAmounts: state.amounts,
  prices: state.prices,
});

export default connect(mapStateToProps, { receivePrices })(Dashboard);
