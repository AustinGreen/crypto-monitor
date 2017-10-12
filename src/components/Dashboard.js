import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePrices } from '../actions';
import Switch from './shared/Switch';
import Prices from './Prices';
import Portfolio from './Portfolio';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      intervalId: null,
    };

    this.fetchPrices = this.fetchPrices.bind(this);
    this.setInterval = this.setInterval.bind(this);
  }

  componentDidMount() {
    this.fetchPrices(this.props.currencyData);
    const intervalId = setInterval(() => this.fetchPrices(this.props.currencyData), 15000);
    this.setInterval(intervalId);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  setInterval(intervalId) {
    this.setState({ intervalId });
  }

  fetchPrices(currencyData) {
    const currencyString = currencyData.map(currency => currency.name).join();
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${currencyString}`)
      .then(response => response.json())
      .then((result) => {
        const pricesUSD = currencyData.map(a => 1 / result[a.name]);
        this.props.updatePrices(pricesUSD);
      });
  }

  render() {
    const { currencyData, prices } = this.props;
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        render: () => {
          if (child.props.render) {
            return child;
          }
          if (child.props.path.includes('portfolio')) {
            return <Portfolio fetchPrices={this.fetchPrices} currencyData={currencyData} prices={prices} />;
          }
          return <Prices currencyData={currencyData} prices={prices} fetchPrices={this.fetchPrices} />;
        },
      }));
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
        <div className="column is-half is-offset-one-quarter">{children}</div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  currencyData: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  updatePrices: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currencyData: state.currencyData,
  prices: state.prices,
});

export default connect(mapStateToProps, { updatePrices })(Dashboard);
