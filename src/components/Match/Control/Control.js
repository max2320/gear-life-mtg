import React, { Component } from 'react';

import './style.css';
import Counter from '../../Counter';

class Control extends Component {
  teamId = this.props.teamId;
  state = {
    currentControl: 'life'
  }

  handleTab = (currentControl) => this.setState({ currentControl });

  handleAction = (action, value) => {
    const actionObject = {
      teamId: this.teamId,
      match: this.props.currentMatch,
      action,
      value
    };

    this.props.registryAction(actionObject);
  }

  counterThreshold(value){
    const { currentControl } = this.state;
    const { matchConfig } = this.props;

    return (currentControl === 'life' && value <= 0) ||
           (currentControl === 'poison' && value >= matchConfig.poison)
  }

  renderScoreCounter(){
    const { currentControl } = this.state;
    const { scoreBoard } = this.props;
    const value = scoreBoard[currentControl];

    return (
      <Counter
        className={this.counterThreshold(value) ? 'red' : '' }
        value={value}
        onAction={this.handleAction.bind(this, currentControl)}
      />
    );
  }

  renderPlayers(){
    return this.props.players();
  }

  renderContent(){
    const { currentControl } = this.state;

    if(currentControl === 'players'){
      return this.renderPlayers();
    }

    return this.renderScoreCounter();
  }

  renderTabs(){
    const { currentControl } = this.state;

    return [
      ['life', 'Life'],
      ['poison', 'Poison'],
      ['players', 'Players']
    ].map(([key, name])=>{
      const selectedClass = key === currentControl ? 'active' : '';
      return (
        <div
          className={`Match-Control__tabs-item ${selectedClass}`}
          onClick={this.handleTab.bind(this, key)}
        >
          {name}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="Match-Control">
        <div className="Match-Control__content">
          {this.renderContent()}
        </div>

        <div className="Match-Control__content">
          {this.renderTabs()}
        </div>
      </div>
    );
  }
}

export default Control;
