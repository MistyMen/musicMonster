// This is the top level of the application

// Import all the necessary packages
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Import all the necessary components
import Nav from './components/partials/Nav';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

// CSS files
import './reset.css';
import './App.css';

class MusicMonster extends Component {
  constructor() {
    super();
    this.state = {
        searchData: null,
        input: '',
        artist: '',
        track: '',
        track_url: '',
        image: '',
        album: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    console.log('Will Mount...');
  }

  componentDidMount() {
    console.log('Did mount...');
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
    console.log(event.target.value)
  };

  render() {
    console.log('Rendering...');
    return (
      <div className="App">
        <Nav />
        <main>
        <SearchForm handleInputChange={this.handleInputChange}/>
          <Switch>
            <Route exact path="/results" render={props =><Results handleInputChange={this.handleInputChange} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default MusicMonster;
