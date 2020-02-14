import React, { Component } from 'react';

import Dice from '../../Dice';
import Life from './Life';
import Poison from './Poison';

import './style.css';

class MatchControl extends Component {
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

  renderers = {
    players : () => {
      return this.props.players();
    },
    dice: () => (<Dice />),
    life: () => (
      <Life
        value={this.props.scoreBoard.life}
        onAction={this.handleAction.bind(this, 'life')}
      />
    ),
    poison: () => (
      <Poison
        threshold={this.props.matchConfig.poison}
        value={this.props.scoreBoard.poison}
        onAction={this.handleAction.bind(this, 'poison')}
      />
    )
  }

  get tabs(){
    const { scoreBoard } = this.props;

    let tabs = [
      ['life', 'Life', scoreBoard.life ],
      ['poison', 'Poison', scoreBoard.poison ],
      ['dice', 'Dice', null]
    ];

    this.props.players && tabs.push(['players', 'Players', null]);

    return tabs;
  }

  renderContent(){
    const { currentControl } = this.state;

    return this.renderers[currentControl]();
  }

  renderTabs(){
    const { currentControl } = this.state;

    return this.tabs.map(([key, name, counter])=>{
      const selectedClass = key === currentControl ? 'active' : '';
      return (
        <div
          className={`Match-Control__tabs-item ${selectedClass}`}
          onClick={this.handleTab.bind(this, key)}
        >
          {name}
          {counter !== null && ` (${counter})`}
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

export default MatchControl;
