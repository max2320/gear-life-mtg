import React, { Component } from 'react';

import Player from  '../Player';

class PlayerList extends Component{
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

  render() {
    return (
      <div className="PlayerList">
        {this.renderPlayers()}

        <button onClick={this.props.createPlayer}>
          + Player
        </button>
      </div>
    )
  }
}


export default PlayerList;
