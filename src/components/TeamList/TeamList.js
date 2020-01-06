import React, { Component } from 'react';

import Team from  '../Team';

class TeamList extends Component{
  renderTeam(teamId) {
    return (
      <Team
        key={teamId}
        {...this.props.teams[teamId]}
      />
    );
  }

  renderTeams() {
    return this.props.order.map((teamId) => (this.renderTeam(teamId)));
  }

  render() {
    return (
      <div className="TeamList">
        {this.renderTeams()}

        <button onClick={this.props.createTeam}>
          + Team
        </button>
      </div>
    )
  }
}


export default TeamList;
