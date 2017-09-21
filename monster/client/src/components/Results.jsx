import React, { Component } from 'react';
import '../result.css';

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
  //   componentDidMount() {
  //   fetch('https://ada-api.herokuapp.com/api/quotes')
  //     .then((res) => {
  //       return res.json();
  //     }).then((jsonRes) => {
  //       this.setState({
  //         searchData: jsonRes.data,
  //       })
  //     })
  // }

  componentDidMount() {
    console.log('Results did mount...');
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

