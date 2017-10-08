import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { save, toggleEdit } from '../actions';

const UpdateStateButton = ({ editState, buttonType, onSave, onToggle }) =>
  buttonType === 'Save' && editState === 'READ' ? null : (
    <button
      onClick={
        buttonType === 'Save'
          ? () => {
            const amounts = [...document.querySelectorAll('input')].map(a => parseFloat(a.value));
            onSave(amounts);
            onToggle();
          }
          : () => onToggle()
      }
      className="button is-inverted is-outlined is-success is-small"
    >
      {buttonType === 'Save' ? 'Save' : editState === 'READ' ? 'Edit' : 'Cancel'}
    </button>
  );

UpdateStateButton.propTypes = {
  editState: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  editState: state.toggleEdit,
});

export default connect(mapStateToProps, { onSave: save, onToggle: toggleEdit })(UpdateStateButton);
