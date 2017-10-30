import React from 'react';
import { Form, Button, Checkbox } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ArtistName from './ArtistName';
import SongName from './SongName';
import AlbumName from './AlbumName';
import './App.css';

const MusicEntry = props => {
  return (
  <div className="musicEntry">
      <div className="artist-song-wrapper">
        <ArtistName
          className="artist"
          isEditing={props.isEditing}
          handleArtistNameEdits={e => props.setArtistName(e.target.value)}
          >{props.artist}</ArtistName>
        <SongName
          className="song"
          isEditing={props.isEditing}
          handleSongNameEdits={e => props.setSongName(e.target.value)}
          >{props.song}</SongName>
      </div>
      <AlbumName
        className="album"
        isEditing={props.isEditing}
        handleAlbumNameEdits={e => props.setAlbumName(e.target.value)}
        >{props.album}</AlbumName>
      <Form inline className="saveForm">
        <Button
          onClick={props.handleToggleEditing}
          bsStyle="info"
          >{props.isEditing ? "Save" : "Edit"}
        </Button>
        <Button bsStyle="danger" onClick={props.handleRemove}>Remove</Button>
        <Checkbox
          className="checkboxStyling"
          checked={props.isFavorite}
          onChange={props.handleFavorite}
          >Favorite
        </Checkbox>
      </Form>
    </div>
  )
}

MusicEntry.propTypes = {
  artist: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setArtistName: PropTypes.func.isRequired,
  setSongName: PropTypes.func.isRequired,
  setAlbumName: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default MusicEntry;
