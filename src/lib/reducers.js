import { combineReducers } from 'redux'

import team from '../ducks/team';
import player from '../ducks/player';

const reducer = combineReducers({
  team,
  player
});

export default reducer;
