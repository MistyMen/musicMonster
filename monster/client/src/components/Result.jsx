import React, { Component } from 'react';


class Result extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.tweed.content !== this.props.tweed.content;
  // }

  render() {
    console.log('Q rendering ____)_)_)_)_)_)_)_(KJHjwdjhwjdhwjdh', this.props.song);
    return (
      <div className="result">
        {this.props.song}

      </div>
    )
  }
}
export default Result;

 // {this.props.songs}
