import React, { PureComponent } from 'react';

import './style.css';

class MatchtType extends PureComponent {
  get types() {
    return Object.values(this.props.matchTypes);
  }

  handleSelection(type) {
    this.props.setType(type);
    this.props.history.push('/players/edit');
  }

  renderTypes() {
    return this.types.map(({id, name, Icon})=>{
      return (
        <div
          className='Format'
          key={id}
          onClick={this.handleSelection.bind(this, id)}
        >
          <Icon className='Format__icon'/>
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
        <h1>Choose Format</h1>
        {this.renderTypes()}
      </div>
    );
  }
}

export default MatchtType;
