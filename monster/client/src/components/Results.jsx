import React, { Component } from "react";
import Result from "./Result";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : ""
    }
  }

  componentWillMount() {
    console.log("Results will mount...");
  }

  // componentDidMount() {
  //   console.log('Results did mount...in Results');
  //   this.setState({
  //     searchResults: "https://open.spotify.com/embed?uri=" + this.props.data["0"].external_urls.spotify
  //   });
  // }

  render() {
    console.log("Results rendering...");
    // console.log(this.props.artist, "Artist")
    // console.log(this.props.image, "Image");
    // console.log("tracks here------>", this.props.data["0"].external_urls.spotify);
    return (
      <div className="results">
     
      <div className="containerSec" >

      <div className="musicInfo">
        <div className="name">G-Eazy</div>
        <div className="music">
          <div className="image">
            <img src="https://yt3.ggpht.com/-VvJBQ3QFIvI/AAAAAAAAAAI/AAAAAAAAAAA/8S5HaQc--Lk/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" alt="G Eazy" height="400" width="400" />
          </div>
          <div className="tracks">
            <iframe src="https://open.spotify.com/embed?uri=https://open.spotify.com/album/09Q3WwGYsQe5ognkvVkmCu" width="400" height="415"></iframe>
          </div>
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