import React, { PureComponent } from 'react';

import './style.css';
import { colorBackground } from '../../../lib/color';

import ColorSymbols from '../../ColorSymbols';

class MatchPlayer extends PureComponent {
  id = this.props.id;

  get colorBackground(){
    return {
      background: colorBackground(this.props.colors)
    }
  }

  render() {
    return (
      <div className="Match-Player" style={this.colorBackground}>
        <div className='Match-PlayerHeader'>
          <div className='Match-PlayerHeader__name'>
            {this.props.name}
          </div>
        </div>

        <ColorSymbols colors={this.props.colors} className='Match-PlayerColors' />
      </div>
    );
  }
}

export default MatchPlayer;
