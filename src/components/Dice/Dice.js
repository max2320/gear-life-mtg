import React, { Component } from 'react';

import d from 'dicejs';
import './style.css';

export default class Dice extends Component {
  state = {
    dice: '0'
  }

  onClick = () => {
    this.setState({
      dice: this.rollDice().result
    });
  }

  rollDice(){
    return d(20).roll();
  }

  render() {
    return (
      <div className="Dice">
        <div className='Dice-number'>{this.state.dice}</div>
        <button
          className='Dice-button'
          onClick={this.onClick}
        >
          Roll
        </button>
      </div>
    );
  }
}
