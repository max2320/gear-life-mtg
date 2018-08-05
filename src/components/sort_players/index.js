import React, { Component } from 'react';
import './style.css';
import d from 'dicejs'
import {colorBackground} from '../../lib/color';

export default class SortPlayers extends Component {
  playerSorted = [];

  state={
    players: []
  }

  sortPlayers(){
    this.setState({
      players: this.props.playersOrder.map((playerKey)=>{
        return {
          playerKey: playerKey,
          score: this.rollDice()
        };
      }).sort((player, nextPlayer)=>-(player.score - nextPlayer.score))
    })
  }

  componentDidMount(){
    this.sortPlayers();
  }

  onClick(){
    this.setState({
      dice:this.rollDice().result
    });
  }

  dice(){
    return d(50);
  }

  rollDice(){
    return this.dice().roll().result;
  }

  close(){
    if(this.props.onClose){
      this.props.onClose();
    }
  }
  renderWinner(){
    const winner = this.state.players[0];

    if(winner){
      const player = this.props.playersList[winner.playerKey];
      return (
        <div
          className='SortPlayers-winner'
          style={{background: colorBackground(player.colors)}}
        >
          <div>Winner</div>
          <div className='SortPlayers-winner-name'>
            {player.name}
          </div>
        </div>
      );
  }
  }

  renderPlayers(){
    return this.state.players.map((playerSorted)=>{
      const player = this.props.playersList[playerSorted.playerKey];

      return (
        <div className='SortPlayers-player' style={{background: colorBackground(player.colors)}}>
          <div className='SortPlayers-player-name'>
            {player.name}
          </div>
          <div className='SortPlayers-player-dice'>{playerSorted.score}</div>
        </div>
      );
    });
  }


  render() {
    return (
      <div className="SortPlayers-overlay" onClick={()=>{
        this.close()
      }}>
        <div className="SortPlayers">
          <div className="SortPlayers-header">
            Roll Dices
          </div>

          <a className="SortPlayers-close" onClick={()=>{
            this.close()
          }}>
            <i className='material-icons'>close</i>
          </a>

          {this.renderWinner()}

          <div className='SortPlayers-container'>
            {this.renderPlayers()}
          </div>
        </div>
      </div>
    );
  }
}
