import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MusicMonster from './MusicMonster';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MusicMonster />, document.getElementById('root'));
registerServiceWorker();
