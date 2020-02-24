import React, { PureComponent } from 'react';
import MatchTeam from  './MatchTeam';
import { Link, Redirect } from "react-router-dom";

class Match extends PureComponent{
  handleMatchEnd = () => {
    if(window.confirm("Are you sure you want end this match?")) {
      this.props.resetMatch();
      this.props.history.push('/players/edit');
    }
  }

  get showIcons(){
    return this.props.matchConfig.leaders.length > 0;
  }

  renderTeam(teamId, leader) {
    return (
      <MatchTeam
        key={teamId}
        showIcons={this.showIcons}
        leader={leader}
        {...this.props.teams[teamId]}
      />
    );
  }

  renderTeams() {
    const { leaders } = this.props.matchConfig;

    return this.props.order.map((teamId, index) => this.renderTeam(teamId, leaders.includes(index)));
  }

  render() {
    if(this.props.order.length === 0 ) {
      return (<Redirect to="/match/selection" />);
    }

    return (
      <div className={`Match ${this.props.matchConfig.id}`}>
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
    );
  }
}

export default Match;
