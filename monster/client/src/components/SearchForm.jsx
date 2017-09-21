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
      <form
        className="SearchForm">
        <input
        className="search"
        type="text"
        placeholder="Search for a song"
        onChange={this.props.handleInputChange}/>
        <button
        className="searchButton"
        id="submit">
        <Link to="/results">Find it!</Link></button>
      </form>
      )
  }
}

export default SearchForm;
