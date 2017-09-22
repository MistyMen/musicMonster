// This is the top level of the application

// Import all the necessary packages
import React, { Component } from 'react';
import axios from "axios";

import { Route, Switch } from 'react-router-dom';
// Import all the necessary components
import Nav from './components/partials/Nav';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

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

    this.callSpotifyApi = this.callSpotifyApi.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    console.log('Will Mount...');
  }

  componentDidMount(e) {
    console.log('Did mount...');
  //   console.log(e)
  //   axios({
  //     url: `https://api.spotify.com/v1/search?q=eminem&type=artist`,
  //     method:`GET`,
  //     headers:{
  //           Authorization: `Bearer BQD5-fzCkRalpmC2mMNFNrv4mBgJzfyF0Xnt6fm731H20ZORhmWYlx57-XVtCnR68I0R_jVfJZUoTSUBL9yP2LucGq3p4YcssnkXdWLPP6oaAG5DjB26O7-TgddRR6IjBeG2AfLIZ2S85wUzZt9VK-i_22PVzxhJj1sp`
  //     }
  // })
  // .then(res => {
  //     return res.json();
  //   }).then((jsonRes) => {
  //     this.setState({
  //       searchData: jsonRes.data,
  //     })
  //   })
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
            Authorization: `Bearer BQDO61PnmCDLi-EiaKqMVepZIgl8jewClVx9lLAAmL598VTo6HxYEhT4y_9E06pXrE79y6ByPOPcgpNyPl9ShPsfKM0z6xdheRrVRvpPbxL01rBk13IFX1-i58644VklBzKIcRS7OdTStaCTAexfGSo_c4m5w8djZ_L9`
      }
  })
  .then(res => {
    console.log(res);

    const artistName = res.data.artists.items["0"].name;
    const artistPopularity = res.data.artists.items["0"].popularity;
    const artistFollowers = res.data.artists.items["0"].followers.total;
    const album = res.
    this.setState({
      name: artistName
    })
  })
  .catch(err => console.error(err))
}

// onSubmit(e){
//   e.preventDefault();

//   axios({
//     url: 'http:localhost:3001/[endpoint]',
//     method: 'POST',
//     data: {
//       artistSearch: this.state.artist
//     }
//   })
//   .then(res => {
//     // res will include all the information you sent back from the server
//   })
// }

  render() {
    console.log('Rendering...');
    return (
      <div className="App">
        <Nav />
        <main>
        <SearchForm handleInputChange={this.handleInputChange} callSpotifyApi={this.callSpotifyApi} input={this.state.input}/>
          <Switch>

            <Route exact path="/results" render={props => <Results handleInputChange={this.handleInputChange} input={this.state.input}/>} />

          </Switch>
        </main>
      </div>
    );
  }
}
// <Route path='/QuoteList' component={QuoteList}/>
// <Route exact path='/results' component={Results} handleInputChange={this.handleInputChange} updateValue={this.state.input} callSpotifyApi={this.callSpotifyApi}/>
export default MusicMonster;
