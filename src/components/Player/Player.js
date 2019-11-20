import React, { Component } from 'react';

class Player extends Component {
  id = this.props.id;
  state = {
    name: this.props.name
  }

  handleRemove = () => {
    this.props.removePlayer(this.id)
  }

  handleNameUpdate = ({ target: { value: name }}) => {
    this.setState({ name });
  }

  handleSetName = () =>{
    this.props.setPlayerName(this.id, this.state.name)
  }

  render() {
    return (
      <div>
        {JSON.stringify(Object.keys(this.props))}
        <input value={this.state.name} onInput={this.handleNameUpdate}/>
        <button onClick={this.handleSetName}>
          save
        </button>

        <button onClick={this.handleRemove}>
          -
        </button>
      </div>
    );
  }
}

export default Player;
