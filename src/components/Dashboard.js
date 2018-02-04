import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPrices } from '../actions';
import Switch from './shared/Switch';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      intervalId: null,
    };

    this.setInterval = this.setInterval.bind(this);
  }

  componentDidMount() {
    const { currencyData } = this.props;
    this.props.getPrices(currencyData);
    const intervalId = setInterval(() => this.props.getPrices(currencyData), 15000);
    this.setInterval(intervalId);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  setInterval(intervalId) {
    this.setState({ intervalId });
  }

  render() {
    const { currencyData, prices, children } = this.props;
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
        <div className="column is-half is-offset-one-quarter">{children(this.fetchPrices, currencyData, prices)}</div>
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
  children: PropTypes.func.isRequired,
  prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  getPrices: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currencyData: state.currencyData,
  prices: state.prices,
});

export default connect(mapStateToProps, { getPrices })(Dashboard);
