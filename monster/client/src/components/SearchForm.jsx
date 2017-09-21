import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value
    });
    console.log(event.target.value)
  }

  render() {
    return(
      <form
        className="SearchForm">
        <input
        className="search"
        type="text"
        placeholder="Search for a song"
        onChange={this.handleInputChange}/>
        <button
        className="searchButton"
        id="submit">Find it!</button>
      </form>
      )
  }
}

export default SearchForm;
