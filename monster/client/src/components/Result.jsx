import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Result extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.tweed.content !== this.props.tweed.content;
  // }

  render() {
    console.log('Q rendering ____)_)_)_)_)_)_)_(KJHjwdjhwjdhwjdh', this.props.song);
    return (
      <div className="results">
      {this.props.song.href}
      <Iframe url={this.props.song.href} />

      </div>
    )
  }
}
export default Result;

 // {this.props.songs}
