import React from 'react';
import { connect } from 'react-redux';
import { toggleEdit } from '../actions';

const EditButton = ({ dispatch }) => <a onClick={() => dispatch(toggleEdit())}>Edit</a>;

export default connect()(EditButton);
