import React, { Component } from 'react';

class Player extends Component {
  id = this.props.id;

  handleRemove = () => {
    this.props.removePlayer(this.id)
  }

  handleNameUpdate = ({ target: { value: name } }) => {
    this.props.setPlayerName(this.id, name);
  }

  handleTeamUpdate = ({ target: { value: teamId } }) => {
    this.props.setPlayerTeam(this.id, teamId)
  }

  render() {
    return (
      <div>
        <input
          defaultValue={this.props.name}
          onInput={this.handleNameUpdate}
        />
        <select
          defaultValue={this.props.teamId}
          onChange={this.handleTeamUpdate}
        >
          {this.props.teamsOptions.map(({key, label}) => {
            return (
              <option
                key={key}
                value={key}
              >
                {label}
              </option>
            );
          })}
        </select>

        <button onClick={this.handleRemove}>
          -
        </button>
      </div>
    );
  }
}

export default Player;
