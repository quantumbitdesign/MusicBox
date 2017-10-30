import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
import './App.css';

const AlbumName = props => {
  if (props.isEditing) {
    return (
      <FormControl
        className="newEntryInputText"
        type="text"
        value={props.children}
        onChange={props.handleAlbumNameEdits}
        />
    )
  }
    return (
      <p className="album">
        {props.children}
      </p>
    )
};



 AlbumName.propTypes = {
   isEditing: PropTypes.bool.isRequired,
   handleAlbumNameEdits: PropTypes.func.isRequired
}

export default AlbumName;
