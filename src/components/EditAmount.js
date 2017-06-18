import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { editAmount } from '../actions';
import { InputField } from './shared/InputField';

let EditAmount = ({ dispatch, currencyAmounts, fullName, name, editState }) => {
  let input;
  return (
    <div className="column">
      {editState === 'READ'
        ? <div>
            <p className="title is-5">{fullName}</p>
            <p className="subtitle is-6">{`${currencyAmounts.find(a => a.name === name).amount} ${name}`}</p>
          </div>
        : <form
            onSubmit={e => {
              e.preventDefault();
              if (!parseFloat(input.value)) {
                return;
              }
              const amount = parseFloat(input.value);
              dispatch(editAmount(amount, name));
            }}
          >
            <div className="field has-addons" style={{ justifyContent: 'center' }}>
              <p className="control has-icons-right">
                <InputField
                  white
                  defaultValue={currencyAmounts.find(a => a.name === name).amount}
                  placeholder={`0 ${name}`}
                  innerRef={node => {
                    input = node;
                  }}
                />
                <span className="icon is-right">{name}</span>
              </p>
            </div>
          </form>}
    </div>
  );
};

const mapStateToProps = state => ({
  currencyAmounts: state.amounts,
  editState: state.states
});

EditAmount = connect(mapStateToProps, null)(EditAmount);

EditAmount.propTypes = {
  dispatch: PropTypes.func
};

export default EditAmount;
