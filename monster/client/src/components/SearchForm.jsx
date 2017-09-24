import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends Component {
  render() {
    return(
      <form className="" onSubmit={this.props.callSpotifyApi}>
        <input
        value= {this.props.input}
        className="searchInput"
        type="text"
        onChange={this.props.handleInputChange}/>
        <button
        type="submit"
        className="btn"
        ><Link type="submit" to="/results">Find it!</Link></button>
      </form>
      );
  }
}

export default SearchForm;
