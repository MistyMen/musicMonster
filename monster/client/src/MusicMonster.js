// This is the top level of the application

// Import all the necessary packages
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

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
        name: '',
        picture: '',
        song: '',
        url: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    console.log('Will Mount...');
  }

  componentDidMount() {
    console.log('Did mount...');
  }

  callSpotifyApi(event) {
    console.log(event)
    fetch(`https://api.spotify.com/v1/search?q=eminem&type=artist`)
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          searchData: jsonRes.data,
        })
    })
}

  handleInputChange(event) {
    event.preventDefault();
    this.setState({
      input: event.target.value
    });
    console.log(event.target.value);
    // console.log(this.state.input);
  };

  render() {
    console.log('Rendering...');
    return (
      <div className="App">
        <Nav />
        <main>
        <SearchForm handleInputChange={this.handleInputChange} input={this.state.input}/>
          <Switch>
            <Route exact path="/results" render={props =><Results handleInputChange={this.handleInputChange} input={this.state.input}/>} />
          </Switch>
        </main>
      </div>
    );
  }
}
// <Route path='/QuoteList' component={QuoteList}/>
// <Route exact path='/results' component={Results} handleInputChange={this.handleInputChange} updateValue={this.state.input} callSpotifyApi={this.callSpotifyApi}/>

export default MusicMonster;
