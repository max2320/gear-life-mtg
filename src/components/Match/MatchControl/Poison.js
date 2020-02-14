import React, { Component } from 'react';
import Counter from '../../Counter';

class Poison extends Component {
  counterThreshold(value){
    return value >= this.props.threshold;
  }

  render(){
    const { value, onAction } = this.props;

    return (
      <Counter
        className={this.counterThreshold(value) ? 'red' : '' }
        value={value}
        minValue={0}
        onAction={onAction.bind(this)}
      />
    );
  }

}

export default Poison;
