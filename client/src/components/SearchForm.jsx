import React, { Component } from 'react';

class SearchForm extends Component {
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
        id="submit">Find it!</button>
      </form>
      )
  }
}

export default SearchForm;
