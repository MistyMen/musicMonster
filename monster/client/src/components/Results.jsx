import React, { Component } from 'react';
import Fetch from 'react-fetch';

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
        {this.props.input}
      </div>
      )
  }
}

export default Results;

