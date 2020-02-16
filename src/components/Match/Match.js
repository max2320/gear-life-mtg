import React, { PureComponent } from 'react';
import MatchTeam from  './MatchTeam';
import { Link } from "react-router-dom";


class Match extends PureComponent{
  handleMatchEnd = ()=> {
    if(window.confirm("Are you sure you want end this match?")) {
      this.props.history.push('/players/edit');
    }
  }

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
          <Link className="Button Button--blue" to='/match/round_winner'>Finish round</Link>
          <button
            className="Button Button--green"
            onClick={this.handleMatchEnd}
            >
            Finish match
          </button>
        </div>
      </div>
    )
  }
}

export default Match;
