import React from 'react';
import { connect } from 'react-redux';
import { toggleEdit } from '../actions';

const EditButton = ({ dispatch, editState }) =>
  <a onClick={() => dispatch(toggleEdit())}>{editState === 'READ' ? 'Edit' : 'Cancel'}</a>;

const mapStateToProps = state => ({
  editState: state.states
});

export default connect(mapStateToProps, null)(EditButton);
