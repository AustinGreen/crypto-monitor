import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { editAmount } from '../actions';

let EditAmount = ({ dispatch, amounts }) => {
  console.log(amounts);
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
      <p>{`I own ${amounts.BTC} bitcoin(s).`}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  amounts: state.amounts
});

EditAmount = connect(mapStateToProps, null)(EditAmount);

EditAmount.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default EditAmount;
