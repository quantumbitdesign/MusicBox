import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import MusicList from './MusicList';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFiltered: false,
      pendingArtistEntry: "",
      pendingSongEntry: "",
      pendingAlbumEntry: "",
      music: [
      ]
    }
  }

lastMusicEntryId = 0;

newMusicEntryId = () => {
   const id = this.lastMusicEntryId;
   this.lastMusicEntryId += 1;
   return id;
}



removeEntry = id =>
  this.setState ({
    music: this.state.music.filter(musicEntry => id !== musicEntry.id)
  })

//Boolean flipper function
toggleMusicObjProp = (objectProperty, id) =>
  this.setState({
  /*maps through data by the index of the array seeing if
  indexToChange parameter matches the user's index that's being
  changed, then returns the opposite choice of the isFav boolean op chackbox..*/
    music: this.state.music.map(musicEntry => {
      if (id === musicEntry.id) {
        return {
          //spread operator, passes all object props into object literal
          ...musicEntry,
          //changes state of changed properties in the data then reverses them.
          [objectProperty]: !musicEntry[objectProperty]
        }
      }
      return musicEntry;
    })
  });

  toggleFavorite = id =>
    this.toggleMusicObjProp("isFavorite", id);


  toggleEditing = id =>
    this.toggleMusicObjProp("isEditing", id);

  setArtistName = (artist, id) =>
    this.setState({
      music: this.state.music.map(musicEntry => {
        if (id === musicEntry.id) {
          return {
            ...musicEntry,
            artist
          };
        }
        return musicEntry;
      })
  });

  setSongName = (song, id) =>
    this.setState({
      music: this.state.music.map(musicEntry => {
        if (id === musicEntry.id) {
          return {
            ...musicEntry,
            song
          };
        }
        return musicEntry;
      })
  });

  setAlbumName = (album, id) =>
    this.setState({
      music: this.state.music.map(musicEntry => {
        if (id === musicEntry.id) {
          return {
            ...musicEntry,
            album
          };
        }
        return musicEntry;
      })
  });


toggleFilter = () =>
  this.setState({
    isFiltered: !this.state.isFiltered
  })



handleArtistEntryInput = e =>
  this.setState({
    pendingArtistEntry: e.target.value
  })

handleSongEntryInput = e =>
  this.setState({
    pendingSongEntry: e.target.value
  })

handleAlbumEntryInput = e =>
  this.setState({
    pendingAlbumEntry: e.target.value
  })



newEntrySubmitHandler = e => {
  e.preventDefault();
  const id = this.newMusicEntryId();
  this.setState({
    music: [
      {
        artist: this.state.pendingArtistEntry,
        song: this.state.pendingSongEntry,
        album: this.state.pendingAlbumEntry,
        isFavorite: false,
        isEditing: false,
        id
      },
      ...this.state.music
    ],
    pendingArtistEntry: "",
    pendingSongEntry: "",
    pendingAlbumEntry: "",
  });
}




render() {
  return (
    <div className="App">
        <header className="App-header">
          <h1 className="App-title">Music Box</h1>
        </header>
        <Navbar inverse collapseOnSelect className="navHeader">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="http://www.quantumbitdesign.com"
                target="_blank"
                rel="noopener noreferrer">QuantumBit Design</a>
            </Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="tel:209-559-9323">209.559.9323</NavItem>
              <NavItem eventKey={2} href="https://www.github.com/quantumbitdesign"
                target="_blank"
                rel="noopener noreferrer">GitHub</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="mainWrapper">

        <Grid>
          <Row>
            <Form horizontal onSubmit={this.newEntrySubmitHandler}>
              <FormGroup controlId="artistName">
                <Col componentClass={ControlLabel} sm={1}>
                  Artist
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    onChange={this.handleArtistEntryInput}
                    value={this.state.pendingArtistEntry}
                    />
                </Col>
              </FormGroup>

              <FormGroup controlId="songTitle">
                <Col componentClass={ControlLabel} sm={1}>
                  Song Title
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    onChange={this.handleSongEntryInput}
                    value={this.state.pendingSongEntry}
                    />
                </Col>
              </FormGroup>

              <FormGroup controlId="albumName">
                <Col componentClass={ControlLabel} sm={1}>
                  Album
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    onChange={this.handleAlbumEntryInput}
                    value={this.state.pendingAlbumEntry}
                    />
                </Col>
              </FormGroup>

              <FormGroup onSubmit={this.newEntrySubmitHandler}>
                <Col smOffset={1} sm={11} className="favoritesWrapper">
                  <Button type="submit" bsStyle="success">Add Entry</Button>
                  <Col smOffset={8} sm={11}>
                    <Checkbox
                      onChange={this.toggleFilter}
                      checked={this.state.isFiltered}
                      >Sort By Favorites
                    </Checkbox>
                  </Col>
                </Col>
              </FormGroup>
            </Form>
          </Row>
        </Grid>

        <MusicList
          music={this.state.music}
          toggleFavorite={this.toggleFavorite}
          toggleEditing={this.toggleEditing}
          setArtistName={this.setArtistName}
          setSongName={this.setSongName}
          setAlbumName={this.setAlbumName}
          isFiltered={this.state.isFiltered}
          removeEntry={this.removeEntry}
          pendingArtistEntry={this.state.pendingArtistEntry}
          pendingSongEntry={this.state.pendingSongEntry}
          pendingAlbumEntry={this.state.pendingAlbumEntry}
           />

        </div /*mainWrapper div*/>

    </div /*App Div*/>
    );
  }
}

export default App;
