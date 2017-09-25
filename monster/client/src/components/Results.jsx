import React, { Component } from "react";
import Add from './partials/Add';

class Results extends Component {
  componentWillMount() {
    console.log("Results will mount...");
  }

  componentDidMount() {
    console.log("Results did mount...");
    this.props.checkUrl();
  }

  render() {
    return (
      <div className="results">
        <div className="musicInfo">
          <div className="name">{this.props.artist}<Add onClick={this.props.submitToServer}/></div>
          <div className="music">
            <div className="image">
              <img src={this.props.image} alt={this.props.artist} />
            </div>
            <div className="tracks">
              <iframe src={this.props.song} width="400" height="415" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
