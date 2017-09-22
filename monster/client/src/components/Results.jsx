import React, { Component } from 'react';

class Results extends Component {
  componentWillMount() {
    console.log("Results will mount...");
  }

  componentDidMount() {
    console.log('Results did mount...');
  }

  render() {
    console.log('Results rendering...');
    return(
      <div className="results">
        <div className="result">
          <ul>
            <li className="artist">Artist</li>
            <li className="track">Track</li>
            <li className="Album">Album </li>
            <li className="length">length</li>
          </ul>
        </div>
        <div className="result">
          <ul>
            <li className="artist">Artist</li>
            <li className="track">Track</li>
            <li className="Album">Album</li>
            <li className="length">length</li>
          </ul>
        </div>
      </div>
      )
  }
}

export default Results;

