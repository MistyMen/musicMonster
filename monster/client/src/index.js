// Import necessary packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// CSS
import './index.css';

// Necessary components
import MusicMonster from './MusicMonster';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <MusicMonster />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
