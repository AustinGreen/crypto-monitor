import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputField from './shared/InputField';
import { getEditStateAsBool, getSimpleCurrencyData } from '../reducers';

const Amount = ({
  currencyAmounts, handleChange, fullName, name, isEditMode,
}) => (
  <div className="column is-half-mobile">
    {isEditMode ? (
      <div className="field has-addons is-horizontal" style={{ justifyContent: 'center' }}>
        <p className="control has-icons-right">
          <InputField
            onChange={e => handleChange(e.target.value, name)}
            white
            defaultValue={currencyAmounts[name]}
            placeholder="0"
          />
          <span className="icon is-right">{name}</span>
        </p>
      </div>
    ) : (
      <div>
        <p className="title is-5">{fullName}</p>
        <p className="subtitle is-6">{`${currencyAmounts[name]} ${name}`}</p>
      </div>
    )}
  </div>
);

Amount.propTypes = {
  currencyAmounts: PropTypes.shape({
    name: PropTypes.number,
  }),
  fullName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Amount.defaultProps = {
  currencyAmounts: [],
};

const mapStateToProps = state => ({
  currencyAmounts: getSimpleCurrencyData(state),
  isEditMode: getEditStateAsBool(state),
});

export default connect(mapStateToProps, null)(Amount);
