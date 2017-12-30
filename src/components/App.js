import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Player from './player/Player';
import EditPlayer from './editPlayer/EditPlayer';

import SortPlayers from './sortPlayers/SortPlayers';

export default class App extends Component {
  players = [];


  state = {
    players: [{
      name: 'Player 1',
      colors: ['colorless']
    }],
    editMode: false,
    sortPlayers: false
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

  renderPlayers(){
    return this.state.players.map((player, index)=>{
      if(this.state.editMode){
        return (
          <EditPlayer
            name={player.name}
            colors={player.colors}
            index={index + 1}
            onUpdate={(player)=>{
              if(JSON.stringify(this.players[index]) !== JSON.stringify(player)){
                this.players[index] = player;
                this.refreshPlayers();
              }
            }}
          />
        );
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
    var players = this.state.players;

    players.push({
      name: `Player ${players.length + 1}`,
      colors: ['']
    });

    this.setState({
      players: players
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
