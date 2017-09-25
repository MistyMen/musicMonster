import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends Component {
  componentWillMount() {
    console.log('Search form will mount...');
  }

  componentDidMount() {
    console.log('Search form did mount...');
  }

  render() {
    return(
      <form className="SearchForm" onSubmit={this.props.callSpotifyApi}>
        <input
        value= {this.props.input}
        className="search"
        type="text"
        placeholder="Search for a song"
        onChange={this.props.handleInputChange}/>
        <button
        type="submit"
        className="searchButton"
        id="submit"
        onSubmit={this.props.callSpotifyApi}><Link type="submit" to="/results" >Find</Link></button>
      </form>
      );
  }
}

export default SearchForm;
