
import React, { Component } from "react";
import Result from "./Result";
import { Link } from 'react-router-dom'

class Results extends Component {

  componentWillMount() {
    console.log("Results will mount...");
  }

  componentDidMount() {
    console.log('Results did mount...in Results');
    }

  render() {
    console.log("Results rendering...");
    // console.log(this.props.artist, "Artist")
    console.log(this.props.image, "Image");
    console.log("tracks here------>", this.props.data["0"].external_urls.spotify);
    return (
      <div className="results">
        <img src={this.props.image} alt="Artist Image" />
        <h3>{this.props.artist} </h3>
        <iframe src={this.state.searchResults} width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
        <form className="SearchForm" submit={this.props.submitToServer}>
          <input
          value= {this.props.input}
          className="search"
          type="text"
          placeholder="Search for a song"
          onChange={this.props.handleInputChange}/>
          <button
          type="submit"
          className="searchButton"
          id="submit"><Link type="submit" to="/api/artists">Find</Link></button>
        </form>
      </div>
    );
  }
}
export default Results;
