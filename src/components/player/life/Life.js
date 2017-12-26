import React, { Component } from 'react';
import './style.css';

export default class Life extends Component {
  render() {
    return (
      <div className="Life">
        <div
          className="Life-side"
          >
          <div
            className="Life-btn"
            onClick={this.props.onDamage.bind(this)}>
            -
          </div>
        </div>

        <div className="Life-counter">
          {this.props.counter}
        </div>

        <div
          className="Life-side">
          <div
            className="Life-btn"
            onClick={this.props.onHeal.bind(this)}>
            +
          </div>
        </div>
      </div>
    );
  }
}
