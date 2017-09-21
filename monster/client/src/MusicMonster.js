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
  // constructor() {
  //   super();
  //   this.state = {
  //     input: '',
  //   }
  //   this.handleInputChange = this.handleInputChange.bind(this);
  // }

  componentWillMount() {
    console.log('Will Mount...');
  }

  componentDidMount() {
    console.log('Did mount...');
  }

  // handleInputChange(event) {
  //   this.setState({
  //     input: event.target.value
  //   });
  //   console.log(event.target.value)
  // };


  render() {
    console.log('Rendering...');
    return (
      <div className="App">
        <Nav />
        <main>
        <SearchForm />
          <Switch>
            <Route exact path="/results" component={Results} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default MusicMonster;
