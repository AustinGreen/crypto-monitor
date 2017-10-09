import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Amount from './Amount';
import EditButton from './EditButton';
import SaveButton from './SaveButton';
import { save } from '../actions';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedCurrencyData: this.props.currencyData,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave(this.state.updatedCurrencyData.map(currency => parseFloat(currency.amount)));
  }

  handleChange(value = 0, changedCurrencyName) {
    const { updatedCurrencyData } = this.state;
    const changedIndex = updatedCurrencyData.findIndex(currency => changedCurrencyName === currency.name);
    const changedData = [...updatedCurrencyData];
    changedData[changedIndex].amount = parseFloat(value);
    this.setState({ updatedCurrencyData: changedData });
  }

  render() {
    const { currencyData } = this.props;
    const { updatedCurrencyData } = this.state;
    return (
      <section className="hero is-dark">
        <div className="hero-body" style={{ paddingTop: '1em' }}>
          <div className="container">
            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  <EditButton />
                </div>
                <div className="level-item">
                  <SaveButton updatedCurrencyData={updatedCurrencyData} />
                </div>
              </div>
            </nav>
            <form onSubmit={this.handleSubmit} className="columns is-multiline is-mobile">
              {currencyData.map(amount => (
                <Amount
                  fullName={amount.fullName}
                  name={amount.name}
                  key={amount.name}
                  handleChange={this.handleChange}
                />
              ))}
              <input type="submit" style={{ display: 'none' }} tabIndex="-1" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

Hero.propTypes = {
  currencyData: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onSave: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currencyData: state.currencyData,
});

export default connect(mapStateToProps, { onSave: save })(Hero);
