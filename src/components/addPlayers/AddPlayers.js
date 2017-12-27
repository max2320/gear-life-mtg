import React, { Component } from 'react';
import './style.css';
import d from 'dicejs'
import {colorBackground, colorDescription, colorList, colorImage} from '../../lib/color';

export default class AddPlayers extends Component {

  state= {
    name: '',
    white: false,
    blue: false,
    black: false,
    red: false,
    green: false,
    colorless: false
  }

  close(){
    if(this.props.onClose){
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className="AddPlayers-overlay" onClick={()=>{
        this.close()
      }}>
        <div className="AddPlayers">
          <div className="AddPlayers-header">
            Roll Dices
          </div>
          <a className="AddPlayers-close" onClick={()=>{
            this.close()
          }}>
            <i className='material-icons'>close</i>
          </a>

          <div className='AddPlayers-container'>
            <label>Name</label>
            <input onChange={(e)=>{
              this.setState({
                name: e.target.value
              });
            }}
          </div>

        </div>
      </div>
    );
  }
}
