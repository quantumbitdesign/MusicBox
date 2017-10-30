import React from 'react';
import PropTypes from 'prop-types';
import MusicEntry from './MusicEntry';
import PendingEntry from './PendingEntry';
import './App.css';

const MusicList = props =>
    <div className="musicListWrapper">
      <PendingEntry
        artist={props.pendingArtistEntry}
        song={props.pendingSongEntry}
        album={props.pendingAlbumEntry}
        />
    {props.music
      //creates a copy of an array, which is then modified by logical operators
      .filter(musicEntry =>
        !props.isFiltered || musicEntry.isFavorite
      )
      .map((musicEntry, index) =>
      <MusicEntry
        key={index}
        artist={musicEntry.artist}
        song={musicEntry.song}
        album={musicEntry.album}
        isFavorite={musicEntry.isFavorite}
        isEditing={musicEntry.isEditing}
        handleFavorite={() => props.toggleFavorite(musicEntry.id)}
        handleToggleEditing={() => props.toggleEditing(musicEntry.id)}
        setArtistName={text => props.setArtistName(text, musicEntry.id)}
        setSongName={text => props.setSongName(text, musicEntry.id)}
        setAlbumName={text => props.setAlbumName(text, musicEntry.id)}
        handleRemove={() => props.removeEntry(musicEntry.id)}
        />
    )}
    </div>

MusicList.propTypes = {
  music: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setArtistName: PropTypes.func.isRequired,
  setSongName: PropTypes.func.isRequired,
  setAlbumName: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeEntry: PropTypes.func.isRequired,
  pendingArtistEntry: PropTypes.string.isRequired,
  pendingSongEntry: PropTypes.string.isRequired,
  pendingAlbumEntry: PropTypes.string.isRequired,
}

export default MusicList;
