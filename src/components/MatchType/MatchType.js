import React, { PureComponent } from 'react';
import { matchTypes } from '../../configs/consts/matchTypes';

import './style.css';

import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

class MatchtType extends PureComponent {
  get types() {
    return Object.values(matchTypes);
  }

  handleSelection = async (type)=> {
    await this.props.setType(type);
    this.props.history.push('/players/edit');
  }

  renderTypes() {
    return this.types.map(({id, name, Symbol}, index)=>{

      return (
        <div
          className='Format'
          key={id}
          onClick={this.handleSelection.bind(this, id)}
        >
          <Symbol className='Format__icon'/>

          <div className='Format__name'>
            {name}
          </div>
        </div>
      );
    })
  }

  render() {
    return(
      <div className='MatchType'>
        <LogoSvg />
        <h1>Choose Format</h1>

        {this.renderTypes()}
      </div>
    );
  }
}

export default MatchtType;
