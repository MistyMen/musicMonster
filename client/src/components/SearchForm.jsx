import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return(
      <form
        className="SearchForm">
        <input
        type="text"
        placeholder="Search for a song"/>
        <button id="submit">Find it!</button>
      </form>
      )
  }
}

export default SearchForm;
