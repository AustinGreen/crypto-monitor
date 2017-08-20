import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { save, toggleEdit } from '../actions';
import Button from './shared/Button';

const UpdateStateButton = ({ dispatch, editState, buttonType }) =>
  <div>
    {buttonType === 'Save'
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
      : <Button uppercase onClick={() => dispatch(toggleEdit())}>
        {editState === 'READ' ? 'Edit' : 'Cancel'}
      </Button>}
  </div>;

UpdateStateButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  editState: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  editState: state.states,
});

export default connect(mapStateToProps, null)(UpdateStateButton);
