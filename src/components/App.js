import React, { Component } from 'react';
import './App.css';
import Loading from './loading/Loading';
import Header from './header/Header';
import Player from './player/Player';

export default class App extends Component {
  state = {
    loading: false,
    players:[{
      name: 'Max',
      colors:[
        'green',
        'black',
      ]
    },{
      name: 'Khronos',
      colors:['blue','green', 'white']
    },{
      name: 'Fera',
      colors:['red']
    },{
      name: 'DarkSenti',
      colors:['white']
    },{
      name: 'Noob',
      colors:['blue']
    }],

    sortPlayers: false
  }

  sortPlayers(){
    this.setState({
      sortPlayers: true
    });
  }

  renderPlayers(){
    return this.state.players.map((player, index)=>{
      return (
        <Player {...player} index={index + 1} />);
    });
  }

  renderSortPlayer(){
    if(this.state.sortPlayers){
      // return (
      //   <SortPlayers
      //     player={this.state.players}
      //   />
      // );
    }
  }

  render() {
    return (
      <div className="App">
        <Header sortPlayers={()=>{
          this.sortPlayers()
        }} />

        <div className="App-container">
          {this.renderPlayers()}
        </div>
        this.renderSortPlayer();
      </div>
    );
  }
}
