import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleEdit } from '../actions';
import { getEditStateAsBool } from '../reducers';

const EditButton = ({ isEditMode, onToggle }) => (
  <button onClick={onToggle} className="button is-inverted is-outlined is-dark is-small">
    {isEditMode ? 'Cancel' : 'Edit'}
  </button>
);

EditButton.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isEditMode: getEditStateAsBool(state),
});

export default connect(mapStateToProps, { onToggle: toggleEdit })(EditButton);
