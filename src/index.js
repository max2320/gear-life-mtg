import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components';
import registerServiceWorker from './registerServiceWorker';

import Session from './lib/session';


ReactDOM.render((
  <App
    session={new Session()}
  />
), document.getElementById('root'));
registerServiceWorker();
