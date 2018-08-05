import React, { Component } from 'react';
import './style.css';
import Header from './header/Header';

import SortPlayers from './sort_players';

import {genKey} from '../lib/helpers';

export default class App extends Component {
  playersList = {};

  state = {
    sort: false,
    playersOrder: [],
  };

  componentDidMount(){
    this.registerPlayers();
  }

  registerPlayers(){
    const players = this.props.session.getPlayers()
    this.playersList= players.list;
    this.setState({
      playersOrder: players.order
    });
  }

  addPlayer(){
    const {
      playersOrder,
      playersList
    } = this.state;

    const key = `player_${genKey()}`;

    const player =  {
      name: `Player ${this.state.players.order.length + 1}`,
      colors: ['colorless']
    };

    this.playersList = {
      ...playersList,
      [key]: player
    };

    this.setState({
      playersOrder: [
        ...playersOrder,
        ...[key]
      ],
    });
  }

  updatePlayer(key, currentPlayer){

  }

  removePlayer(removeKey){
    const {
      playersOrder,
      playersList
    } = this.state;

    delete playersList[removeKey];

    this.setState({
      playersOrder: playersOrder.filter((key)=>(key !== removeKey))
    });
  }

  renderPlayers(){
    return this.state.playersOrder.map((playerKey)=>{
      const player = this.playersList[playerKey];
      return '';
      // return (
      //   <Player
      //     {...player}
      //     key={playerKey}
      //     onRemove={()=>{
      //       this.removePlayer(playerKey);
      //     }}
      //     onUpdate={(data)=>{
      //       this.playerList[playerKey] = data;
      //     }}
      //   />
      // );
    });
  }

  renderSortPlayer(){
    const {
      playersOrder,
      sort
    } = this.state;
    if(sort){
      return (<SortPlayers
        playersList={this.playersList}
        playersOrder={playersOrder}
        onClose={()=>{
          this.setState({
            sort: false
          })
        }}
        onUpdate={(list)=>{
          this.setUpdate({
            sort: false,
            playersOrder: list
          });
        }}
      />)
    }
  }

  // {this.renderEditMode()}
  render() {
    return (
      <div className="App">
        <Header
          editMode={this.state.editMode}
          sortPlayers={()=>{
            this.setState({
              sort: true
            })
          }}
          onAdd={()=>{
            this.addPlayer()
          }}
          resetMatch={()=>{
            this.setState({
              match: this.state.match + 1
            });
          }}
        />

        <div className="App-container">

        </div>

        {this.renderSortPlayer()}
      </div>
    );
  }
}
