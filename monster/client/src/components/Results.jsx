import React, { Component } from "react";
import Result from "./Result";

class Results extends Component {
  componentWillMount() {
    console.log("Results will mount...");
  }

  componentDidMount() {
    console.log("Results did mount...");
  }

  render() {
    return (
      <div className="results">
        <div className="musicInfo">
          <div className="name">{this.props.artist}</div>
          <div className="music">
            <div className="image">
              <img src={this.props.image} alt={this.props.artist} />
            </div>
            <div className="tracks">
              <iframe src={this.props.track} width="400" height="415" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
