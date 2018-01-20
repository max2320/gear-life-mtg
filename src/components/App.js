import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Player from './player/Player';
import EditPlayer from './editPlayer/EditPlayer';

import SortPlayers from './sortPlayers/SortPlayers';

export default class App extends Component {
  players = [];


  state = {
    players: [],
    editMode: false,
    sortPlayers: false,
    playersCounter: 0
  }

  sortPlayers(){
    this.setState({
      sortPlayers: true
    });
  }

  editPlayers(){
    this.setState({
      editMode: ! this.state.editMode
    });
  }

  refreshPlayers(){
    this.setState({
      players: this.players
    });
  }

  renderEdit(player, index){
    return (
      <EditPlayer
        key={player.code}
        code={player.code}
        name={player.name}
        colors={player.colors}
        index={index + 1}
        onUpdate={(currentPlayer)=>{
          let hasChanges = this.state.players.filter((player)=>( player.code === currentPlayer.code && JSON.stringify(player) === JSON.stringify(currentPlayer) ));
          if( hasChanges.length == 0 ){
            this.setState({
              players: this.state.players.map((player) => (player.code === currentPlayer.code ? currentPlayer : player))
            });
          }
        }}
        onDelete={(currentPlayer)=>{
          this.setState({
            players: this.state.players.filter((player) => (player.code !== currentPlayer.code))
          });
        }}
      />
    );
  }

  renderPlayers(){
    return this.state.players.map((player, index)=>{
      if(this.state.editMode){
        return this.renderEdit(player, index);
      }else{
        return (<Player {...player} index={index + 1} />);
      }
    });
  }

  renderSortPlayer(){
    if(this.state.sortPlayers){
      return (
        <SortPlayers
          players={this.state.players}
          onClose={()=>{
            this.setState({
              sortPlayers: false
            })
          }}
        />
      );
    }
  }

  addPlayer(){
    let player = {
      code: `player_${this.state.playersCounter}`,
      name: `Player ${this.state.players.length + 1}`,
      colors: ['']
    };

    this.setState({
      players: [...this.state.players, player],
      playersCounter: this.state.playersCounter + 1
    });
  }


  renderEditMode(){
    if(this.state.editMode){
      return (
        <div className={`Player AddPlayer-button`}>
          <div className='AddPlayer-button-add' onClick={()=>{
            this.addPlayer();
          }}>
            <strong>
              Add new
            </strong>
          </div>

          <div className='AddPlayer-button-start' onClick={()=>{
            this.setState({
              editMode: false
            });
          }}>
            <strong>
              Start match
            </strong>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          editMode={this.state.editMode}
          sortPlayers={()=>{
            this.sortPlayers()
          }}
          editPlayers={()=>{
            this.setState({
              editMode: true
            });
          }}
        />

        <div className="App-container">
          {this.renderPlayers()}
          {this.renderEditMode()}
        </div>

        {this.renderSortPlayer()}
      </div>
    );
  }
}
