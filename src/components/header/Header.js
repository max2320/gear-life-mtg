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
        <span className='Header-icon' onClick={()=>{
          this.props.editPlayers();
        }}>
          <i className='material-icons'>edit</i>
        </span>
      );
    }
  }

  render() {
    return (
      <div className="Header">
        <span className='Header-icon' onClick={()=>{
          this.props.sortPlayers();
        }}>
          <i className='material-icons'>sort</i>
        </span>
        <span className='Header-icon' onClick={()=>{
          this.props.resetMatch();
        }}>
          <i className='material-icons'>refresh</i>
        </span>
        {this.renderEditButton()}
      </div>
    );
  }
}
