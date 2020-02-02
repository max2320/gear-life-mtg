import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import store from '../configs/store'
import App from './App';

import './index.css';
import 'balloon-css';

export default ()=>{
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
