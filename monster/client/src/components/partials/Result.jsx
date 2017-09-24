import React, { Component } from 'react';


class Result extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.tweed.content !== this.props.tweed.content;
  // }

  render() {
    console.log('', this.props.song);
    return (
      <div className="result">
          <ul>
            <li className="artist">Artist</li>
            <li className="track">Track</li>
            <li className="Album">asas</li>
            <li className="length">length</li>
          </ul>
        </div>
    )
  }
}
export default Result;

 // {this.props.songs}
 // {this.props.artist}
 // this.props.album
