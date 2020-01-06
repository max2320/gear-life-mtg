import React, { Component } from 'react';

class Team extends Component {
  id = this.props.id;
  state = {
    name: this.props.name
  }

  handleRemove = () => {
    this.props.removeTeam(this.id)
  }

  handleNameUpdate = ({ target: { value: name }}) => {
    this.props.setTeamName(this.id, name)
  }

  handleSetName = () =>{
  }

  render() {
    return (
      <div>
        <input
          defaultValue={this.state.name}
          onInput={this.handleNameUpdate}
        />

        <button onClick={this.handleRemove}>
          -
        </button>
      </div>
    );
  }
}

export default Team;
