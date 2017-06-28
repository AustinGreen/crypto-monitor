import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editAmount } from '../actions';
import { InputField } from './shared/InputField';

let Amount = ({ dispatch, currencyAmounts, fullName, name, editState }) => {
  return (
    <div className="column is-half-mobile">
      {editState === 'READ'
        ? <div>
            <p className="title is-5">{fullName}</p>
            <p className="subtitle is-6">{`${currencyAmounts.find(a => a.name === name).amount} ${name}`}</p>
          </div>
        : <div className="field has-addons" style={{ justifyContent: 'center' }}>
            <p className="control has-icons-right">
              <InputField white defaultValue={currencyAmounts.find(a => a.name === name).amount} placeholder="0" />
              <span className="icon is-right">{name}</span>
            </p>
          </div>}
    </div>
  );
};

const mapStateToProps = state => ({
  currencyAmounts: state.amounts,
  editState: state.states
});

Amount = connect(mapStateToProps, null)(Amount);

Amount.propTypes = {
  dispatch: PropTypes.func
};

export default Amount;
