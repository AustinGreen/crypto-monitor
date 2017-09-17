import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputField from './shared/InputField';

const Amount = ({ currencyAmounts, fullName, name, editState }) => (
  <div className="column is-half-mobile">
    {editState === 'READ' ? (
      <div>
        <p className="title is-5">{fullName}</p>
        <p className="subtitle is-6">{`${currencyAmounts.find(a => a.name === name).amount} ${name}`}</p>
      </div>
    ) : (
      <div className="field has-addons" style={{ justifyContent: 'center' }}>
        <p className="control has-icons-right">
          <InputField white defaultValue={currencyAmounts.find(a => a.name === name).amount} placeholder="0" />
          <span className="icon is-right">{name}</span>
        </p>
      </div>
    )}
  </div>
);

Amount.propTypes = {
  currencyAmounts: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  fullName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editState: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currencyAmounts: state.amounts,
  editState: state.toggleEdit,
});

export default connect(mapStateToProps, null)(Amount);
