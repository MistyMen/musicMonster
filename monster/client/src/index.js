import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MusicMonster from './MusicMonster';
import registerServiceWorker from './registerServiceWorker';
import Router from 'react-router-dom';

ReactDOM.render(
  <Router>
    <MusicMonster />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
