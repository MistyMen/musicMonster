import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {
  constructor(props){
    super(props);
  }


  componentWillMount() {
    console.log("Results will mount...");
  }

  componentDidMount() {
    console.log('Results did mount...');
  }

  render() {
    console.log('Results rendering...');
    // console.log(this.props.artist, "Artist")
    console.log(this.props.image, "Image")
    console.log('tracks here------>',this.props.data)
    return(
      <div className="results">

{this.props.data.map(song => {
          console.log(song);
          return <Result song={song} key={song.id} />
            })}

        <div className="result">
          <ul>
            <li className="artist">{this.props.artist}</li>
            <li className="track">{this.props.track}</li>
            <li className="Album">asas</li>
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
    );
  }
}

export default Results;
