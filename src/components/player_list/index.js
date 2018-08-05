import React, { Component } from 'react';

import Player from './player/Player';
import EditPlayer from './edit_player';

import {genKey} from '../lib/helpers';


export default class PlayerList{
  renderEdit(player, index){
    return (
      <EditPlayer
        key={player.code}
        code={player.code}
        name={player.name}
        colors={player.colors}
        index={index + 1}
        onUpdate={(currentPlayer)=>{
          this.updatePlayer(currentPlayer);
        }}
        onDelete={(currentPlayer)=>{
          console.log('asdf');
          this.removePlayer(currentPlayer);
        }}
      />
    );
  }

  renderPlayer(){
    return (
      <Player
      {...player}
      key={`P_${index}_${genKey()}`} index={index + 1}
      />
    );
  }

  renderList(){
    const {players, editMode} = this.props;

    return players.map((player, index)=>{
      if(editMode){
        return this.renderEdit(player, index);
      }else{
        return ;
      }
    });
  }

  render(){
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}
