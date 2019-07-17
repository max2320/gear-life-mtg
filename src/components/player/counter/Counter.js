import React, { Component } from 'react';
import './style.css';
import minus from '../../../assets/minus.svg';
import plus from '../../../assets/plus.svg';

export default class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <button
          className="Counter-side"
          onClick={this.props.onSub.bind(this)}>
          <img src={minus} />
        </button>

        <div className="Counter-counter">
          {this.props.counter}
        </div>

        <button
          className="Counter-side"
          onClick={this.props.onAdd.bind(this)}>
          <img src={plus} />
        </button>
      </div>
    );
  }
}
