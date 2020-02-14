import React, { PureComponent } from 'react';

import { order, colors } from '../../configs/consts/colors';

import './style.css';

class ColorSymbols extends PureComponent {
  get symbols(){

    return order.filter((color)=>(this.props.colors.includes(color)))
                .map((color)=>(colors[color].Symbol));
  }
  renderSymbols(){
    return this.symbols.map((Symbol, index) => (
      <div className='Symbol' key={`Symbol${index}`}>
        <Symbol className='Symbol__image' />
      </div>
    ));
  }

  render(){
    return (
      <div className={`Symbols ${this.props.size || ''} ${this.props.className || ''}`}>
        {this.renderSymbols()}
      </div>
    )
  }
}

export default ColorSymbols;
