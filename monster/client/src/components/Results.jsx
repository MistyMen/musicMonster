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
        {this.props.searchData.map(elem =>
          return <Record data={this.props.elem.id}/>
         )};
      </div>
      )
  }
}

export default Results;

