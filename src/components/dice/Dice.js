import React, { Component } from 'react';
import './style.css';
import d from 'dicejs'

export default class Dice extends Component {
  state={
    dice: '0'
  };
  
  onClick(){
    console.log(this.rollDice())
    this.setState({
      dice:this.rollDice().result
    });
  }

  rollDice(){
    return d(6).roll();
  }

  render() {
    return (
      <div className="Dice">
        <div className='Dice-number'>{this.state.dice}</div>
        <button className='Dice-button'
          onClick={()=>{this.onClick()}}>Roll</button>
      </div>
    );
  }
}
