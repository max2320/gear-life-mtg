import React, { PureComponent } from 'react';

import MatchPlayer from '../MatchPlayer';
import MatchControl from '../MatchControl';
import ColorSymbols from '../../ColorSymbols';

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
    return { background: colorBackground(this.teamColors) };
  }

  get teamColors(){
    return [...new Set(this.teamPlayers.reduce((acc, { colors } )=>{
      return [...acc, ...colors ];
    },[]))]
  }

  get teamName(){
    let name = this.props.name;
    if(this.teamPlayers.length === 1){
      name = `${name} ${this.teamPlayers[0].name}`;
    }
    return name;
  }

  shouldRenderPlayers(){
    if(this.teamPlayers.length === 1){
      return null;
    }

    return this.renderPlayers.bind(this)
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
            {this.teamName}
          </div>
          <div className='Match-TeamHeader__score'>
            {this.scoreBoard.wins}
          </div>

          <ColorSymbols
            className='Match-TeamHeader__colors'
            colors={this.teamColors}
            size='small'
          />
        </div>

        <MatchControl
          teamId={this.id}
          scoreBoard={this.scoreBoard.currentScore}
          players={this.shouldRenderPlayers()}
        />
      </div>
    );
  }
}

export default MatchTeam;
