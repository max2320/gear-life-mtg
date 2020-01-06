import React, { Component } from 'react';

import './style.css';

class MatchtType extends Component {
  get types(){
    return Object.keys(this.props.matchTypes);
  }

  handleSelection(type){
    this.props.setType(type);
  }

  renderTypes() {
    return this.types.map((type)=>{
      return (
        <div
          key={type}
          onClick={this.handleSelection.bind(this, type)}
        >
          {this.props.matchTypes[type].name}
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
