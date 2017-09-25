import React, { Component } from 'react';
import Iframe from 'react-iframe';



class Result extends Component {
  constructor() {
    super();
    
    this.state = {
      searchResults : ""
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.tweed.content !== this.props.tweed.content;
  // }

  componentDidMount() {
    console.log('Results did mount...in Result');
    this.setState({
      searchResults: "https://open.spotify.com/embed?uri=" + this.props.song
    });
  }

  render() {
    console.log('Q rendering ____)_)_)_)_)_)_)_(KJHjwdjhwjdhwjdh', this.props.song);
    return (
      <div className="results">
      
      
      <iframe src={this.state.searchResults} width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>

      </div>
    )
  }
}
export default Result;

