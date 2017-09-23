import React, { Component } from 'react';


class Result extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.tweed.content !== this.props.tweed.content;
//   }

  render() {
    console.log('Q rendering');
    return (
      <div className="result">
        {this.props.artist.content}
         
      </div>
    )
  }
}
export default Result;
