import React, { Component } from 'react';
import './style.css';


import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class Header extends Component {
  state = {
    loading: false
  }

  render() {
    return (
      <div className="Header">
        <a className='Header-icon' onClick={()=>{
          this.props.sortPlayers();
        }}>
          <i className='material-icons'>sort</i>
        </a>
      </div>
    );
  }
}
