import React, { Component } from 'react';
// import '../result.css';
import Fetch from 'react-fetch';

class Results extends Component {
  constructor() {
      super();

      // Test data, to be replaced with spotify API data
      this.state = {
        searchData: null,
        artist: '',
        track: '',
        album: '',
      }
    }

    componentWillMount() {
      console.log("Results will mount...");
    }

  // Put API for spotify + configure for api
    componentDidMount(req, res) {
      const { artistSearch } = req.body;
      console.log(artistSearch)
        fetch({
          url: `https://api.spotify.com/v1/search?q=${artistSearch}&type=artist`,
          method: 'GET',
          headers: {
            Authorization: 'Bearer BQD5-fzCkRalpmC2mMNFNrv4mBgJzfyF0Xnt6fm731H20ZORhmWYlx57-XVtCnR68I0R_jVfJZUoTSUBL9yP2LucGq3p4YcssnkXdWLPP6oaAG5DjB26O7-TgddRR6IjBeG2AfLIZ2S85wUzZt9VK-i_22PVzxhJj1sp'
          }
        })
        .then((res) => {
          return res.json();
        }).then((jsonRes) => {
          this.setState({
            searchData: jsonRes.data,
          })
        })
  }

  render() {
    console.log('Results rendering...');
    return(
      <div className="results">
        Results Div
      </div>
      )
  }
}

export default Results;

