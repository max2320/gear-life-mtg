import React, { Component } from 'react';
import { Link } from "react-router-dom";

import d from 'dicejs'
import './style.css';

class MatchSort extends Component {
  givenNumbers = [];

  state = {
    teams: null
  }

  componentDidMount(){
    this.rollDices();
  }

  get teams() {
    return Object.values(this.props.teams);
  }

  rollDice() {
    const diceResult = d(this.teams.length * 7).roll().result;

    if(this.givenNumbers.includes(diceResult)) {
      return this.rollDice();
    }

    this.givenNumbers.push(diceResult);

    return diceResult;
  }

  renderTeams() {
    return this.state.teams.map(({ name, score }, index) => {
      return (
        <div className={`MatchSort__team ${(index === 0 ? 'MatchSort__team--first' : '')}`}>
          <div className='MatchSort__team-name'>
            {name}
          </div>

          <div className='MatchSort__team-score'>
            {score}
          </div>
        </div>
      );
    });
  }

  rollDices = () => {
    this.givenNumbers = [];
    this.setState({ teams: null });

    const teams = this.teams.map(({ id, name }) => {
      const score = this.rollDice();
      return { id, name, score };
    }).sort((teamA, teamB) => teamB.score -teamA.score );

    this.setState({ teams })
  }

  renderContent() {
    return (
      <div className='MatchSort__container'>
        {this.renderTeams()}
      </div>
    );
  }

  render() {
    return (
      <div className='MatchSort'>
        <h1>Sort Teams</h1>

        {this.state.teams && this.renderContent()}

        <button
          className='Button Button--green'
          onClick={this.rollDices}
        >
          Roll the dices
        </button>

        <Link className='Button Button--blue' to="/">
          Back to match
        </Link>
      </div>
    );
  }
}

export default MatchSort;
