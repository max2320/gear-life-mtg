import React, { PureComponent } from 'react';

import './style.css';
import { ReactComponent as MinusIcon} from '../../assets/minus.svg';
import { ReactComponent as PlusIcon} from '../../assets/plus.svg';


class Counter extends PureComponent {
  handleAction = (value) => {
    this.props.onAction(value);
  }

  render() {
    return (
      <div className="Counter">
        <button
          className="Counter__side"
          onClick={this.handleAction.bind(this, -1)}>
          <MinusIcon />
        </button>

        <div className={`Counter__counter ${this.props.className || ''}`}>
          {this.props.value}
        </div>

        <button
          className="Counter__side"
          onClick={this.handleAction.bind(this, 1)}>
          <PlusIcon />
        </button>
      </div>
    );
  }
}

export default Counter;
