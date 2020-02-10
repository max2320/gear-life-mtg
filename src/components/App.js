import React, { Component } from 'react';

import './App.css';

import Header from './Header';
import TeamList from './TeamList';
import Match from './Match';
import PlayerList from './PlayerList';
import MatchType from './MatchType';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <div className="App-container">

            <Switch>
              <Route path="/" exact>
                <Match />
              </Route>

              <Route path="/match/selection">
                <MatchType />
              </Route>

              <Route path="/players/edit">
                <PlayerList />
              </Route>

              <Route path="/teams/edit">
                <TeamList />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
