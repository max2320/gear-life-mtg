import React, { Component } from 'react';
import './style.css';

export default class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <button
          className="Counter-side"
          onClick={this.props.onSub.bind(this)}>
          <i className='material-icons'>remove</i>
        </button>

        <div className="Counter-counter">
          {this.props.counter}
        </div>

        <button
          className="Counter-side"
          onClick={this.props.onAdd.bind(this)}>
          <i className='material-icons'>add</i>
        </button>
      </div>
    );
  }
}
