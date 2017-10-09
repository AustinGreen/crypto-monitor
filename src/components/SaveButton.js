import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { save } from '../actions';
import { getEditStateAsBool } from '../reducers';

const SaveButton = ({ updatedCurrencyData, isEditMode, onSave }) =>
  (isEditMode ? (
    <button
      onClick={() => onSave(updatedCurrencyData.map(currency => parseFloat(currency.amount)))}
      className="button is-inverted is-outlined is-dark is-small"
    >
      Save
    </button>
  ) : null);

SaveButton.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  updatedCurrencyData: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  isEditMode: getEditStateAsBool(state),
});

export default connect(mapStateToProps, { onSave: save })(SaveButton);
