import React, { Component } from 'react';
import './style.css';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import config from '../../assets/config.svg';
import dice from '../../assets/dice.svg';
import reset from '../../assets/reset.svg';
import github from '../../assets/github.svg';

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
          <img src={config} />
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
          <img src={dice} />
        </span>
        <span className='Header-icon' onClick={()=>{
          this.props.resetMatch();
        }}>
          <img src={reset} />
        </span>
        {this.renderEditButton()}

        <a
          target='_blank'
          className='Header-icon Header-icon--right'
          href='https://github.com/max2320/gear-life-mtg'>
          <img src={github} />
        </a>
      </div>
    );
  }
}
