// This is the top level of the application

// Import all the necessary packages
import React, { Component } from 'react';
import axios from "axios";

import { Route } from 'react-router-dom';
// Import all the necessary components
import Nav from './components/partials/Nav';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
// import Result from './components/Result';


// CSS files
import './reset.css';
import './App.css';

class MusicMonster extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchData: null,
        input: '',
        artist: '',
        track: '',
        track_url: '',
        image: '',
        album: '',
    }
    this.submitToServer = this.submitToServer.bind(this);
    this.callSpotifyApi = this.callSpotifyApi.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    console.log('Will Mount...');
  }

  componentDidMount(e) {
    console.log('Did mount...');
  }


  handleInputChange(event) {
    this.setState({
      input: event.target.value
    });
}

  callSpotifyApi(e){
    console.log('in here')
    e.preventDefault();
    const artistSearch = this.state.input;

     axios({
      url: `https://api.spotify.com/v1/search?q=${artistSearch}&type=artist`,
      method:`GET`,
      headers:{
            Authorization: `Bearer BQDVGVm78nz2QR7-DuK1e_0x0vh-QtTljLMlyBLzaDRBN4WpG1teVy5yh51CDtAxZzbvpwgvjsecS6tjXgmdWzdizODwcf_t85syK3G6-vH90a3pBFQwXhXu2hFKAHFglURlMhaMtHbQ3Hy2djPOMjbc7v2LNEgWARxF`
      }
  })
  .then(res => {
    console.log(res);

    const artistName = res.data.artists.items["0"].name;
    const track_url = res.data.artists.items
    const artistPopularity = res.data.artists.items["0"].popularity;
    const artistFollowers = res.data.artists.items["0"].followers.total;
    const genre = res.data.artists.items[0].genres
    const image = res.data.artists.items["0"].images[0].url
    console.log(genre);
    console.log(artistName);
    console.log(artistPopularity);
    console.log(artistFollowers);
    console.log(image);
    console.log(track_url);


    this.setState({
      artist: artistName,
      image: image,
      track: track_url,
    })
    console.log(this.state)
  })

  .catch(err => console.error(err))
}

submitToServer(e){
  e.preventDefault();

  axios({
    url: 'http:localhost:3001/api/artists',
    method: 'POST',
    data: {
      artistSearch: this.state.artist
    }
  })
  .then(res => {
    // res will include all the information you sent back from the server
  })
  .catch(err => console.log(err));
}

  render() {
    console.log('Rendering...');
    return (
      <div className="App">
        <Nav />
        <main>
            <SearchForm handleInputChange={this.handleInputChange} callSpotifyApi={this.callSpotifyApi} input={this.state.input}/>
            <Route exact path="/results" render={props => <Results artist={this.state.artist} image={this.state.image} track={this.state.track} />}/>
        </main>
      </div>
    );
  }
}



 // artist: artistName,
 //      image: image,
 //      track: track_url,
export default MusicMonster;
