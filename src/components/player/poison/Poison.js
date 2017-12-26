import React, { Component } from 'react';
import './style.css';

export default class Poison extends Component {
  state = {
    counter: 0
  }

  updateLife(points){
    this.setState({
      counter: this.state.counter + points
    });
  }

  onDamage(){
    if(this.props.onDamage){
      this.props.onDamage()
    }
    
    this.updateLife(-1);
  }

  onHeal(){
    if(this.props.onHeal){
      this.props.onHeal()
    }
    this.updateLife(1);
  }

  render() {
    return (
      <div className="Life">
        <a
          className="Life-damage"
          onClick={(e)=>{
            this.onDamage()
          }}>
          -
        </a>
        <div className="Life-counter">
          {this.state.counter}
        </div>

        <a
          className="Life-heal"
          onClick={(e)=>{
            this.onHeal()
          }}>
          +
        </a>
      </div>
    );
  }
}
