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
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="form">
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default MusicMonster;
