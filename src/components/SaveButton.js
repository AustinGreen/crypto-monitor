import React from 'react';
import { connect } from 'react-redux';
import { save, toggleEdit } from '../actions';

const SaveButton = ({ dispatch, editState }) =>
  <a
    onClick={() => {
      const amounts = [...document.querySelectorAll('input')].map(a => parseFloat(a.value));
      // const amounts = parseFloat(input.value);
      dispatch(save(amounts));
      dispatch(toggleEdit());
    }}
  >
    {editState === 'READ' ? '' : 'Save'}
  </a>;

const mapStateToProps = state => ({
  editState: state.states
});

export default connect(mapStateToProps, null)(SaveButton);
