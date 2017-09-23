import React, { Component } from 'react';
// import Fetch from 'react-fetch';
import Result from './Result';

class Results extends Component {
  // componentWillMount() {
  //   console.log("Results will mount...");
  // }

  // componentDidMount() {
  //   console.log('Results did mount...');
  // }

  render() {
    console.log(this.props.data.quotesData, 'Results rendering...');
    return(
      <div className="results">
      { this.props.data.quotesData.map( artist => {
        {console.log(artist.content, "SSSS")}
        return 
      })}
      </div>
      )
  }
}

// <Result artist={artist} key={artist.id} />
// this.props.data.quotesData[0].content
export default Results;

