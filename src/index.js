import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


function gtag(){
  window.dataLayer = window.dataLayer || [];
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-42927176-2');

var gaTag = document.createElement('script');
gaTag.setAttribute('src', "//www.googletagmanager.com/gtag/js?id=UA-42927176-2");
gaTag.setAttribute('async', "true");
