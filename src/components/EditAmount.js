import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { editAmount } from '../actions';
import styled from 'styled-components';

const FlatInput = styled.input`
  background-color: transparent;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-radius: 0;
  color: white;
  border-bottom: 3px solid white;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  -ms-flex-pack: start;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-left: calc(0.625em - 1px);
  padding-right: calc(0.625em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  max-width: 100%;
  width: 100%;
  outline: 0;
`;

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
              <FlatInput
                placeholder={`0 ${name}`}
                innerRef={comp => {
                  input = comp;
                }}
              />
            </p>
          </div>
        </form>
      </div>
      <div className="column is-quarter">
        <p>{`I own ${currencyAmounts.find(a => a.name === name).amount} ${name}.`}</p>
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
