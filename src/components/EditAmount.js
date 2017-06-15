import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { editAmount } from '../actions';

const EditAmount = ({ dispatch, amounts }) => {
  let input;
  console.log(parseInt(amounts[5].amount));
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(editAmount(input.value));
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
      <p>{`I own bitcoin(s).`}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  amounts: state.amounts
});

export const VisibleTodoList = connect(mapStateToProps)(EditAmount);

EditAmount.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(EditAmount);
