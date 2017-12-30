import React, { Component } from 'react';
import './style.css';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class Header extends Component {
  state = {
    loading: false
  }

  renderEditButton(){
    if(!this.props.editMode){
      return (
        <a className='Header-icon' onClick={()=>{
          this.props.editPlayers();
        }}>
          <i className='material-icons'>edit</i>
        </a>
      );
    }
  }

  render() {
    return (
      <div className="Header">
        <a className='Header-icon' onClick={()=>{
          this.props.sortPlayers();
        }}>
          <i className='material-icons'>sort</i>
        </a>
        {this.renderEditButton()}
      </div>
    );
  }
}
