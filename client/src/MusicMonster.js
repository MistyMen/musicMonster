// This is the top level of the application

// Import all the necessary packages
import React, { Component } from 'react';

// Import all the necessary components
import Nav from './components/partials/Nav';
import SearchForm from './components/SearchForm';

// CSS files
import './reset.css';
import './App.css';

class MusicMonster extends Component {
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
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="form">
          <SearchForm handleInputChange={this.handleInputChange} />
        </div>
      </div>
    );
  }
}

export default MusicMonster;
