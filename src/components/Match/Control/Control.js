import React, { PureComponent } from 'react';

import './style.css';
import {colors, order} from '../../../configs/consts/colors';
import { colorBackground } from '../../../lib/color';

class Counter extends PureComponent {
  render(){
    return (
      <div class="Counter">
        <button
          class="Counter__button"
          onClick={this.props.onSub}>
          -
        </button>

        <div class="Counter__score">
          {this.props.value}
        </div>

        <button
          class="Counter__button"
          onClick={this.props.onAdd}
        >
          +
        </button>
      </div>
    );
  }
}


class Control extends PureComponent {
  teamId = this.props.teamId;

  handleAction = (action, value) => {
    const actionObject = {
      teamId: this.teamId,
      match: this.props.currentMatch,
      action,
      value
    };

    this.props.registryAction(actionObject);
  }

  render() {
    return (
      <div className="Match-Control">
        <div className="Match-Control__life">
          <Counter
            value={this.props.scoreBoard.life}
            onSub={this.handleAction.bind(this, 'life', -1)}
            onAdd={this.handleAction.bind(this, 'life', 1)}
          />
        </div>

        <div className="Match-Control__Poison">
          <Counter
            value={this.props.scoreBoard.poison}
            onSub={this.handleAction.bind(this, 'poison', -1)}
            onAdd={this.handleAction.bind(this, 'poison', 1)}
          />
        </div>
      </div>
    );
  }
}

export default Control;
