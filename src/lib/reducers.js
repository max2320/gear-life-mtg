import { combineReducers } from 'redux'

import team from '../ducks/team';
import player from '../ducks/player';
import control from '../ducks/control';
import match from '../ducks/match';

const reducer = combineReducers({
  team,
  player,
  control,
  match
});

export default reducer;
