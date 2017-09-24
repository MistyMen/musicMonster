import React, { Component } from "react";
import Result from "./Result";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: ""
    };
  }

  componentWillMount() {
    console.log("Results will mount...");
  }

  componentDidMount() {
    this.props.checkUrl();
    this.setState({
      searchResults:
        "https://open.spotify.com/embed?uri=" +
        this.props.data["0"].external_urls.spotify
    });
    console.log("Results did mount...in Results", this.props.data);
  }

  render() {
    // debugger;
    console.log(this.props.path, "path");
    console.log("Results rendering...");
    // console.log(this.props.artist, "Artist")
    // console.log(this.props.image, "Image");
    // console.log("tracks here------>", this.props.data["0"].external_urls.spotify);
    return (
      <div className="results">
        <div className="musicInfo">
          <div className="name">{this.props.artist}</div>
          <div className="music">
            <div className="image">
              <img
                src={this.props.image}
                alt={this.props.artist}
             
              />
            </div>
            <div className="tracks">
              <iframe src={this.state.searchResults} width="400" height="415" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Results;
// <img src={this.props.image} alt="Artist Image" />
// <h3>{this.props.artist} </h3>
// <iframe src={this.state.searchResults} width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>

// <div className="results">
// <div className="titleSec">Music Monster</div>
// <div className="searchSec">
//   <span>Genre</span>
//   <span className="artistSec">Artist</span><span>Music</span>

// </div>
// </div>

// <div className="results">
// <div className="titleSec">Music Monster</div>
// <div className="searchSec">
//   <span>Genre</span>
//   <span className="artistSec">Artist</span><span>Music</span>

// </div>
// </div>
