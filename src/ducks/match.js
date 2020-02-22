import {setCache, getCache} from '../lib/local_cache';

import { actions as teamActions } from './team';
import { actions as playerActions } from './player';
import { actions as controlActions } from './control';
import { actions as scoreBoardActions } from './scoreBoard';

import { matchTypes } from '../configs/consts/matchTypes';

const initialState = getCache('match') || {
  selectedType: null,
  allowCustom: false,
  matchConfig: null
};

export const actionTypes = {
  setType:  'match/SELECT_TYPE',
  prepareMatch:  'match/PREPARE_MATCH',
  updateCache: 'match/UPDATE_CACHE'
};

export const actions = {
  setType: (selectedType) => {
    return async (dispatch, getState) => {
      dispatch({ type: actionTypes.setType, payload: { selectedType } })

      await dispatch(teamActions.reset());
      await dispatch(playerActions.reset());
      await dispatch(scoreBoardActions.resetMatch());

      await dispatch(actions.prepareMatch());
      dispatch(actions.updateCache());
    }
  },
  prepareMatch: () => {
    return async (dispatch, getState) => {
      const { selectedType } = getState().match;

      const selectedMatch = matchTypes[selectedType];

      for(let team = 0; team < selectedMatch.teams; team++){
        const teamId = dispatch(teamActions.createTeam());

        for(let player = 0; player < selectedMatch.teamMembers; player++){
          await dispatch(playerActions.createPlayer(teamId));
        }
      }

      const payload = {
        allowCustom: selectedMatch['allowCustom'],
        matchConfig: selectedMatch
      };
      await dispatch({ type: actionTypes.prepareMatch, payload });
      await dispatch(controlActions.validateAll());
      dispatch(actions.updateCache());
    }
  },
  updateCache: () => {
    return (dispatch, getState) => {
      setCache('match', getState().match);
      dispatch({ type: actionTypes.updateCache, payload: {} });
    }
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.setType:
    case actionTypes.prepareMatch:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default reducer;
