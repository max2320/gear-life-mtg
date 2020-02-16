import React, { Component } from 'react';

import './style.css';

class MatchRoundWinner extends Component {
  state = {
    teamIds: [],
    locked: true
  }

  get teams() {
    return Object.values(this.props.teams);
  }

  handleSelection = (teamId) => {
    let { teamIds } = this.state;

    if(teamIds.includes(teamId)){
      teamIds = teamIds.filter((id)=>id!==teamId);
    } else {
      teamIds = [...teamIds, teamId];
    }

    this.setState({
      teamIds,
      locked: teamIds.length === 0
    });
  }

  handleConfirm = () =>{
    const { teamIds } = this.state;
    if(teamIds.length > 0){
      this.props.registryRoundWinners(teamIds);
      this.props.history.push('/');
    } else {
      alert('Please select the winner!!');
    }
  }

  renderTeams() {
    const { teamIds } = this.state;
    return this.teams.map(({ name, id }) => {
      return (
        <div
          className={`MatchRoundWinner__team ${(teamIds.includes(id) ? 'selected' : '')}`}
          onClick={this.handleSelection.bind(this, id)}
        >
          <div className='MatchRoundWinner__team-name'>
            {name}
          </div>
        </div>
      );
    });
  }


  render() {
    return (
      <div className='MatchRoundWinner'>
        <h1>Round Result</h1>
        <h3>Select the winner(s)</h3>

        <div className='MatchRoundWinner__container'>
          {this.renderTeams()}
        </div>

        <button
          className='Button Button--green'
          onClick={this.handleConfirm}
          disabled={this.state.locked}
        >
          Next Round
        </button>
      </div>
    );
  }
}

export default MatchRoundWinner;
