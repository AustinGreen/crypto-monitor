import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { editAmount } from '../actions';
import { InputField } from './shared/InputField';

let EditAmount = ({ dispatch, currencyAmounts, name }) => {
  let input;
  return (
    <div className="columns is-mobile">
      <div className="column is-quarter is-offset-one-quarter">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!parseFloat(input.value)) {
              return;
            }
            const amount = parseFloat(input.value);
            dispatch(editAmount(amount, name));
            input.value = '';
          }}
        >
          <div className="field has-addons" style={{ justifyContent: 'center' }}>
            <p className="control">
              <InputField
                white
                placeholder={`0 ${name}`}
                innerRef={node => {
                  input = node;
                }}
              />
              <p>{`I own ${currencyAmounts.find(a => a.name === name).amount} ${name}.`}</p>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currencyAmounts: state.amounts
});

EditAmount = connect(mapStateToProps, null)(EditAmount);

EditAmount.propTypes = {
  dispatch: PropTypes.func
};

export default EditAmount;
