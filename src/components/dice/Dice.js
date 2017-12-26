import React, { Component } from 'react';
// import './style.css';
import d from 'dicejs'

export default class Dice extends Component {
  state={
    dice: ''
  }

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
        <button onClick={()=>{this.onClick()}}>Roll</button>
        {this.state.dice}
      </div>
    );
  }
}
