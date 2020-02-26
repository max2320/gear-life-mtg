import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import Team from  '../Team';

class TeamList extends PureComponent{
  handleAddTeam = () =>{
    this.props.createTeam(true);
  }

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

  renderButtons(){
    return [(
      <button
        className='Button Button--green'
        onClick={this.handleAddTeam}
      >
        + Team
      </button>
    )];
  }

  render() {
    return (
      <div className="TeamList">
        {this.renderTeams()}

        <div className="TeamList__controls">
          {this.props.allowCustom && this.renderButtons()}

          <Link to='/players/edit'
            className='Button Button--blue'>
            Players
          </Link>
        </div>
      </div>
    )
  }
}


export default TeamList;
