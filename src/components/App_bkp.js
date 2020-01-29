import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
// import Player from './player/Player';
import TeamList from './TeamList';
import PlayerList from './PlayerList';
import MatchType from './MatchType';
import ToggleEdit from './Control/ToggleEdit';

// import EditPlayer from './editPlayer/EditPlayer';
// import SortPlayers from './sortPlayers/SortPlayers';
import { setCache, getCache } from '../lib/local_cache';

const genKey= ()=> (parseInt(Math.random()*10000000));


export default class App extends Component {
  players = [];

  state = {
    players: [],
    editMode: false,
    sortPlayers: false,
    playersCounter: 0,
    match: 0
  }

  componentDidMount(){
    if(localStorage.getItem('players')){
      this.recoverSession();
    }else{
      this.editPlayers();
    }
  }

  recoverSession(){
    this.setState({
      players: getCache('players')
    });
  }

  componentDidUpdate(){
    setCache('players', this.state.players)

    if(this.state.sortPlayers){
      document.querySelector('body').style.overflow='hidden';
    }else{
      document.querySelector('body').style.overflow='';

    }
  }

  sortPlayers(){
    this.setState({
      sortPlayers: true
    });
  }

  editPlayers(){
    this.setState({
      match: this.state.match + 1,
      editMode: ! this.state.editMode
    });
  }

  updatePlayer(currentPlayer){
    let hasChanges = this.state.players.filter((player)=>( player.code === currentPlayer.code && JSON.stringify(player) === JSON.stringify(currentPlayer) ));
    if( hasChanges.length === 0 ){
      this.setState({
        players: this.state.players.map((player) => (player.code === currentPlayer.code ? currentPlayer : player))
      });
    }
  }
  removePlayer(currentPlayer){
    this.setState({
      players: this.state.players.filter((player) => (player.code !== currentPlayer.code))
    });
  }

  refreshPlayers(){
    this.setState({
      players: this.players
    });
  }

  // renderEdit(player, index){
  //   return (
  //     <EditPlayer
  //       key={player.code}
  //       code={player.code}
  //       name={player.name}
  //       colors={player.colors}
  //       index={index + 1}
  //       onUpdate={(currentPlayer)=>{
  //         this.updatePlayer(currentPlayer);
  //       }}
  //       onDelete={(currentPlayer)=>{
  //         this.removePlayer(currentPlayer);
  //       }}
  //     />
  //   );
  // }


  // renderPlayers(){
  //   return this.state.players.map((player, index)=>{
  //     if(this.state.editMode){
  //       return this.renderEdit(player, index);
  //     }else{
  //       return (<Player {...player} key={`${this.state.match}_P_${index}_${genKey()}`} index={index + 1} />);
  //     }
  //   });
  // }
  //
  // renderSortPlayer(){
  //   if(this.state.sortPlayers){
  //     return (
  //       <SortPlayers
  //         players={this.state.players}
  //         onClose={()=>{
  //           this.setState({
  //             sortPlayers: false
  //           })
  //         }}
  //       />
  //     );
  //   }
  // }

  // addPlayer(){
  //   if(this.state.players.length < 10){
  //     let player = {
  //       code: `player_${this.state.playersCounter}_${genKey()}`,
  //       name: `Player ${this.state.players.length + 1}`,
  //       colors: ['colorless']
  //     };
  //
  //     this.setState({
  //       players: [...this.state.players, player],
  //       playersCounter: this.state.playersCounter + 1
  //     });
  //   }else{
  //     alert('Sorry, but the max players support are 10 players')
  //   }
  // }

  //
  // renderEditMode(){
  //   if(this.state.editMode){
  //     return (
  //       <div className={`Player AddPlayer-button`}>
  //         <div className='AddPlayer-button-add' onClick={()=>{
  //           this.addPlayer();
  //         }}>
  //           <strong>
  //             Add new
  //           </strong>
  //         </div>
  //
  //         <div className='AddPlayer-button-start' onClick={()=>{
  //           if(this.state.players.length < 2){
  //             alert('Add at least 2 players');
  //           }else{
  //             if(this.state.players.filter((player)=>(player.colors.length === 0)).length > 0){
  //               alert('Please select one color');
  //             }else{
  //               this.setState({
  //                 editMode: false
  //               });
  //             }
  //           }
  //         }}>
  //           <strong>
  //             Start match
  //           </strong>
  //         </div>
  //       </div>
  //     );
  //   }
  // }

  // {this.renderPlayers()}
  // {this.renderEditMode()}
  // {this.renderSortPlayer()}
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
          resetMatch={()=>{
            this.setState({
              match: this.state.match + 1
            });
          }}
        />

        <div className="App-container">
        <MatchType />
        </div>


        <TeamList />
        <PlayerList />
        <ToggleEdit/>
      </div>
    );
  }
}
