import React, { PureComponent } from 'react';

import MatchPlayer from '../MatchPlayer';
import Control from '../Control';

import './style.css';

class MatchTeam extends PureComponent {
  id = this.props.id;

  get teamPlayers(){
    return Object.values(this.props.players).filter(({teamId})=> teamId === this.id);
  }
  get scoreBoard(){
    return this.props.teams[this.id];
  }

  renderPlayers() {
    return this.teamPlayers.map((player)=>{
      return (
        <MatchPlayer
          key={player.id}
          {...player}
        />
      );
    })

  }

  render() {
    return (
      <div className='Match-Team'>
        <div className='Match-TeamHeader'>
          <div className='Match-TeamHeader__name'>
            {this.props.name} ({this.scoreBoard.wins})
          </div>
        </div>

        <div className='Match-TeamPlayers'>
          {this.renderPlayers()}
        </div>

        <Control teamId={this.id} scoreBoard={this.scoreBoard.currentScore} />
      </div>
    );
  }
}

export default MatchTeam;
