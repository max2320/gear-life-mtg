import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Loading.css';

class Loading extends Component {
  state = {
    loading: false
  }

  render() {
    return (
      <div className="Loading">
        <img src={logo} className="Loading-logo" alt="logo" />
        <h1 className="Loading-title">Welcome to React</h1>
      </div>
    );
  }
}

export default Loading;
