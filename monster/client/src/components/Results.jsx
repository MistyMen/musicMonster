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
    console.log(this.props.artist, "Artist")
    console.log(this.props.image, "Image")
    console.log('tracks here------>',this.props.track)
    return(
      <div className="results">
        <span>{this.props.artist}</span>
        <img src={this.props.image} />
        <span>{this.props.track.map(song => {
          return <Result song={song} key={song.id} />
            })}
        </span>
      </div>
      )
  }
}

export default Results;

// {this.props.input}
// <span >{this.props.image}</span>
