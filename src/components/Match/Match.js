import React, { PureComponent } from 'react';
import MatchTeam from  './MatchTeam';
import { Link } from "react-router-dom";


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

  render() {
    return (
      <div className="Match">
        {this.renderTeams()}

        <div className="Match__controls">
          <Link className="Button Button--green" to='/match/winner'>Finish</Link>
        </div>
      </div>
    )
  }
}

export default Match;
