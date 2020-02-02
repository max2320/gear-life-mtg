import { combineReducers } from 'redux'

import team from '../ducks/team';
import player from '../ducks/player';
import control from '../ducks/control';
import match from '../ducks/match';
import scoreBoard from '../ducks/scoreBoard';

const reducer = combineReducers({
  team,
  player,
  control,
  match,
  scoreBoard
});

export default reducer;
