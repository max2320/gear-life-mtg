import React, { Component } from 'react';
import Counter from '../../Counter';

class Life extends Component {
  counterThreshold(value){
    return value <= 0;
  }

  render(){
    const { value, onAction } = this.props;

    return (
      <Counter
        className={this.counterThreshold(value) ? 'red' : '' }
        value={value}
        onAction={onAction.bind(this)}
      />
    );
  }

}

export default Life;
