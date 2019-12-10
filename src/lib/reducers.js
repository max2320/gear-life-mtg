import { combineReducers } from 'redux'

import team from '../ducks/team';
import player from '../ducks/player';
import control from '../ducks/control';

const reducer = combineReducers({
  team,
  player,
  control
});

export default reducer;
