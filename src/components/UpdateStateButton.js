import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { save, toggleEdit } from '../actions';
import Button from './shared/Button';

const UpdateStateButton = ({ editState, buttonType, save, toggleEdit }) => (
  <div>
    {buttonType === 'Save' ? (
      <Button
        uppercase
        onClick={() => {
          const amounts = [...document.querySelectorAll('input')].map(a => parseFloat(a.value));
          save(amounts);
          toggleEdit();
        }}
      >
        {editState === 'READ' ? '' : 'Save'}
      </Button>
    ) : (
      <Button uppercase onClick={() => toggleEdit()}>
        {editState === 'READ' ? 'Edit' : 'Cancel'}
      </Button>
    )}
  </div>
);

UpdateStateButton.propTypes = {
  editState: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  editState: state.toggleEdit,
});

export default connect(mapStateToProps, { save, toggleEdit })(UpdateStateButton);
