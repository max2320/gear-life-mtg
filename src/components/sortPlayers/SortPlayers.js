import React, { Component } from 'react';
import './style.css';
import d from 'dicejs'
import {colorBackground, colorDescription, colorList, colorImage} from '../../lib/color';

export default class SortPlayers extends Component {
  numberGiven = [];
  winnerValue= 0;
  winnerName= '';
  winnerColor= '';

  state={
    winnerValue: 0,
    winnerName: '',
    players: []
  }

  componentDidMount(){
    const players = this.props.players.map((player)=>{
      const dice = this.rollDice(player.name);
      const color = colorBackground(player.colors);

      if(this.winnerValue < dice){
        this.winnerValue= dice;
        this.winnerName= player.name;
        this.winnerColor= color;

      }
      return {
        name: player.name,
        dice: dice,
        color: color,
      };
    });

    this.setState({
      players: players,
      winnerName: this.winnerName,
      winnerValue: this.winnerValue,
      winnerColor: this.winnerColor
    });
  }

  onClick(){
    this.setState({
      dice:this.rollDice().result
    });
  }

  rollD50(){
    return d(50).roll().result;
  }

  rollDice(name){
    var dice = this.rollD50();

    while(this.numberGiven.indexOf(dice) != -1){
      dice = this.rollD50();
    }

    this.numberGiven.push(dice);

    return dice;
  }

  close(){
    if(this.props.onClose){
      this.props.onClose();
    }
  }

  renderPlayers(){
    return this.state.players.map((player)=>{
      return (
        <div className='SortPlayers-player' style={{background: player.color}}>
          <div className='SortPlayers-player-name'>
            {player.name}
          </div>
          <div className='SortPlayers-player-dice'>{player.dice}</div>
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
          <div className='SortPlayers-winner'  style={{background: this.state.winnerColor}}>
            <div>Winner</div>
            <div className='SortPlayers-winner-name'>
              {this.state.winnerName}
            </div>
          </div>
          <div className='SortPlayers-container'>
            {this.renderPlayers()}
          </div>

        </div>
      </div>
    );
  }
}
