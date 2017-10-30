import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const PendingEntry = props => {
  if (props.artist || props.song || props.album) {
    return (
  <div className="musicEntry">
      <div className="artist-song-wrapper">
        <p
          className="artist"
          >{props.artist}
        </p>
        <p
          className="song"
          >{props.song}
        </p>
      </div>
      <p
        className="album"
        >{props.album}
      </p>
    </div>
  );
 }
 return null;
}

PendingEntry.propTypes = {
  artist: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
}

export default PendingEntry;
