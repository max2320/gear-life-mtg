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
    this.setState({ name });
  }
  
  handleSetName = () =>{
    this.props.setTeamName(this.id, this.state.name)
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

export default Team;
