import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { editAmount } from '../actions';

let EditAmount = ({ dispatch, amount }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!parseFloat(input.value)) {
            return;
          }
          const amount = parseFloat(input.value);
          dispatch(editAmount(amount));
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">
          Update Amount
        </button>
      </form>
      <p>{`I own ${amount} bitcoin(s).`}</p>
    </div>
  );
};

const getAmounts = amounts => {
  return amounts.find(a => a.name === 'BTC').amount;
};

const mapStateToProps = state => ({
  amount: getAmounts(state.amounts)
});

EditAmount = connect(mapStateToProps, null)(EditAmount);

EditAmount.propTypes = {
  dispatch: PropTypes.func
};

export default EditAmount;
