import React, { PureComponent } from 'react';

import './style.css';
import { ReactComponent as MinusIcon} from '../../assets/minus.svg';
import { ReactComponent as PlusIcon} from '../../assets/plus.svg';

import Button from '../Button';


class Counter extends PureComponent {
  allowUpdate(modifier){
    const { minValue, maxValue, value } = this.props;
    const nextValue = value + modifier;
    let allow = true;

    if(minValue !== undefined){
      allow = allow && minValue <= nextValue;
    }

    if(maxValue !== undefined){
      allow = allow && maxValue >= nextValue;
    }

    return allow;
  }

  handleAction = (modifier) => {
    this.allowUpdate(modifier) && this.props.onAction(modifier);
  }

  handleLongAction = (operator) => {
    const modifier = operator * Number(prompt("how many?", 1));

    if(modifier !== NaN && typeof modifier === 'number'){
      this.allowUpdate(modifier) && this.props.onAction(modifier);
    }
  }

  render() {
    return (
      <div className="Counter">
        <Button
          className="Counter__side"
          onClick={this.handleAction.bind(this, -1)}
          onClickAndHold={this.handleLongAction.bind(this, -1)}
        >
          <MinusIcon />
        </Button>

        <div className={`Counter__counter ${this.props.className || ''}`}>
          {this.props.value}
        </div>

        <Button
          className="Counter__side"
          onClick={this.handleAction.bind(this, 1)}
          onClickAndHold={this.handleLongAction.bind(this, 1)}
        >
          <PlusIcon />
        </Button>
      </div>
    );
  }
}

export default Counter;
