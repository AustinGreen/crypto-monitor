import React from 'react';
import { connect } from 'react-redux';
import { save, toggleEdit } from '../actions';

const Button = ({ dispatch, editState, buttonType }) =>
  buttonType === 'Save' 
    ? <a
      onClick={() => {
        const amounts = [...document.querySelectorAll('input')].map(a => parseFloat(a.value));
        dispatch(save(amounts));
        dispatch(toggleEdit());
      }}
    >
      {editState === 'READ' ? '' : 'Save'}
    </a>
    : <a onClick={() => dispatch(toggleEdit())}>{editState === 'READ' ? 'Edit' : 'Cancel'}</a>;

const mapStateToProps = state => ({
  editState: state.states
});

export default connect(mapStateToProps, null)(Button);
