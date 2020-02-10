import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import Player from  '../Player';

class PlayerList extends PureComponent{
  handleAddPlayer = () => {
    this.props.createPlayer();
    this.props.createPlayer();
  }

  handleStartMatch = () => {
    this.props.startMatch();
    this.props.history.push('/');
  }

  renderPlayer(playerId) {
    return (
      <Player
        key={playerId}
        {...this.props.players[playerId]}
      />
    );
  }

  renderPlayers() {
    return this.props.order.map((playerId) => (this.renderPlayer(playerId)));
  }

  renderButtons(){
    return [(
      <button
        className='PlayerList__button PlayerList__button--green'
        onClick={this.handleAddPlayer}
      >
        + Player
      </button>
    )];
  }

  render() {
    return (
      <div className="PlayerList">
        {this.renderPlayers()}
        
        <div className="PlayerList__controls">
          {this.props.allowCustom && this.renderButtons()}

          <Link to='/teams/edit'
            className='PlayerList__button PlayerList__button--blue'>
            Teams
          </Link>
          <button
            className='PlayerList__button PlayerList__button--green'
            onClick={this.handleStartMatch}
          >
            StartMatch
          </button>
        </div>
      </div>
    )
  }
}


export default PlayerList;
