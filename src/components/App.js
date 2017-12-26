import React, { Component } from 'react';
import './App.css';
import Loading from './loading/Loading';
import Header from './header/Header';
import Player from './player/Player';
import Dice from './dice/Dice';

class App extends Component {
  state = {
    loading: false
  }

  renderLoading(){
    if(!this.state.loading){
      return (<Loading />);
    }
  }

  render() {

    return (
      <div className="App">
        <Header />

        <Player
          name='Player'
          color={['green', 'black']} />
        <Player
          name='Player'
          color={['green','red']} />
        <Player
          name='Player'
          color={['blue']} />
        <Player
          name='Player'
          color={['black']} />
        <Player
          name='Player'
          color={['white']} />

        <Player
          name='Player'
          color={['green','white','black']} />
        <Player
          name='Player'
          color={['red']} />
        <Dice/>
      </div>
    );
  }
}

export default App;
