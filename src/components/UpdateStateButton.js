import React from 'react';
import { connect } from 'react-redux';
import { save, toggleEdit } from '../actions';
import { Button } from './shared/Button';

const UpdateStateButton = ({ dispatch, editState, buttonType }) =>
  buttonType === 'Save' 
    ? <Button
      uppercase
      onClick={() => {
        const amounts = [...document.querySelectorAll('input')].map(a => parseFloat(a.value));
        dispatch(save(amounts));
        dispatch(toggleEdit());
      }}
    >
      {editState === 'READ' ? '' : 'Save'}
    </Button>
    : <Button uppercase onClick={() => dispatch(toggleEdit())}>{editState === 'READ' ? 'Edit' : 'Cancel'}</Button>;

const mapStateToProps = state => ({
  editState: state.states
});

export default connect(mapStateToProps, null)(UpdateStateButton);
