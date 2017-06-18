import React from 'react';
import { connect } from 'react-redux';
import { toggleEdit } from '../actions';

const EditButton = ({ dispatch, editState }) =>
  <a onClick={() => dispatch(toggleEdit())}>{editState === 'READ' ? 'Edit' : 'Save'}</a>;

const mapStateToProps = state => ({
  currencyAmounts: state.amounts
});

export default connect(mapStateToProps, null)(EditButton);
