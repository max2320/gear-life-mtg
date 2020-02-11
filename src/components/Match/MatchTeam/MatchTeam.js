import React, { PureComponent } from 'react';

import MatchPlayer from '../MatchPlayer';
import Control from '../Control';

import './style.css';
import { colorBackground } from '../../../lib/color';


class MatchTeam extends PureComponent {
  id = this.props.id;

  get teamPlayers(){
    return Object.values(this.props.players).filter(({teamId})=> teamId === this.id);
  }

  get scoreBoard(){
    return this.props.teams[this.id];
  }

  get teamStyle(){
    if(this.teamPlayers.length === 1){
      return { background: colorBackground(this.teamPlayers[0].colors) }
    }
    return null;
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
      <div className='Match-Team' style={this.teamStyle}>
        <div className='Match-TeamHeader'>
          <div className='Match-TeamHeader__name'>
            {this.props.name} ({this.scoreBoard.wins})
          </div>
        </div>

        <Control
          teamId={this.id}
          scoreBoard={this.scoreBoard.currentScore}
          players={this.renderPlayers.bind(this)}
        />
      </div>
    );
  }
}

export default MatchTeam;
