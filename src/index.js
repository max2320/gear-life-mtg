import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


window.dataLayer = [];

function gtag(){
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-42927176-2');

var gaTag = document.createElement('script');
gaTag.setAttribute('src', "//www.googletagmanager.com/gtag/js?id=UA-42927176-2");
gaTag.setAttribute('async', "true");
