import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
import './App.css';

const SongName = props => {
  if (props.isEditing) {
    return (
      <FormControl
        className="newEntryInputText"
        type="text"
        value={props.children}
        onChange={props.handleSongNameEdits}
        />
    )
  }
    return (
      <p className="song">
        {props.children}
      </p>
    )
};



 SongName.propTypes = {
   isEditing: PropTypes.bool.isRequired,
   handleSongNameEdits: PropTypes.func.isRequired
}

export default SongName;
