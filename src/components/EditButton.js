import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleEdit } from '../actions';

const EditButton = ({ editState, onToggle }) => (
  <button onClick={onToggle} className="button is-inverted is-outlined is-success is-small">
    {editState === 'READ' ? 'Edit' : 'Cancel'}
  </button>
);

EditButton.propTypes = {
  editState: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  editState: state.toggleEdit,
});

export default connect(mapStateToProps, { onToggle: toggleEdit })(EditButton);
