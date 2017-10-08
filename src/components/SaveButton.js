import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { save, toggleEdit } from '../actions';

const SaveButton = ({ editState, onSave, onToggle }) =>
  editState === 'READ' ? null : (
    <button
      onClick={() => {
        const amounts = [...document.querySelectorAll('input')].map(a => parseFloat(a.value));
        onSave(amounts);
        onToggle();
      }}
      className="button is-inverted is-outlined is-success is-small"
    >
      Save
    </button>
  );

SaveButton.propTypes = {
  editState: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  editState: state.toggleEdit,
});

export default connect(mapStateToProps, { onSave: save, onToggle: toggleEdit })(SaveButton);
