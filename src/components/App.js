import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
// import Player from './player/Player';
import TeamList from './TeamList';
import PlayerList from './PlayerList';
import MatchType from './MatchType';
import ToggleEdit from './Control/ToggleEdit';

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
              <Route path="/match_type">
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


          <ToggleEdit/>
        </div>
      </Router>
    );
  }
}
