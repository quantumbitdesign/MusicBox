import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
import './App.css';

const ArtistName = props => {
  if (props.isEditing) {
    return (
      <FormControl
        className="newEntryInputText"
        type="text"
        value={props.children}
        onChange={props.handleArtistNameEdits}
        />
    )
  }
    return (
      <p className="artist">
        {props.children}
      </p>
    )
};



 ArtistName.propTypes = {
   isEditing: PropTypes.bool.isRequired,
   handleArtistNameEdits: PropTypes.func.isRequired
}

export default ArtistName;
