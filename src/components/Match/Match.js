import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import MatchTeam from  './MatchTeam';

class Match extends PureComponent{
  renderTeam(teamId) {
    return (
      <MatchTeam
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
        className='Match__button Match__button--green'
        onClick={this.handleAddTeam}
      >
        + Team
      </button>
    )];
  }

  render() {
    return (
      <div className="Match">
        {this.renderTeams()}
        {JSON.stringify(this.props.history)}
      </div>
    )
  }
}


export default Match;
