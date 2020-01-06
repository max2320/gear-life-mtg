import uuid from '../lib/uuid';
import {setCache, getCache} from '../lib/local_cache';
import { actions as teamActions } from './team';
import { actions as playerActions } from './player';

const initialState = getCache('match') || {
  selectedType: null,
  allowCustom: false,
  matchTypes: {
    standard: {
      name: "Standard",
      defaultLife: 20,
      defaultPoison: 10,
      teams: 2,
      teamMembers: 1,
      allowCustom: true
    },
    twoHeadedGiant: {
      name: "Two-Headed Giant",
      defaultLife: 30,
      defaultPoison: 15,
      teams: 2,
      teamMembers: 2,
      allowCustom: false
    },
    emperor: {
      name: "Emperor",
      defaultLife: 20,
      defaultPoison: 10,
      teams: 2,
      teamMembers: 3,
      allowCustom: false
    }
  }
};

export const actionTypes = {
  setType:  'match/SELECT_TYPE',
  prepareMatch:  'match/PREPARE_MATCH',
  updateCache: 'match/UPDATE_CACHE'
};

export const actions = {
  setType: (selectedType) => {
    return (dispatch, getState) => {
      dispatch({ type: actionTypes.setType, payload: { selectedType } })

      dispatch(teamActions.reset());
      dispatch(playerActions.reset());

      setTimeout(()=>dispatch(actions.prepareMatch()), 100);
      dispatch(actions.updateCache());
    }
  },
  prepareMatch: () => {
    return (dispatch, getState) => {
      const { matchTypes, selectedType } = getState().match;

      const selectedMatch = matchTypes[selectedType];

      for(let team = 0; team < selectedMatch.teams; team++){
        const teamId = dispatch(teamActions.createTeam());

        for(let player = 0; player < selectedMatch.teamMembers; player++){
          dispatch(playerActions.createPlayer(teamId));
        }
      }

      dispatch({ type: actionTypes.prepareMatch, payload: { allowCustom: selectedMatch['selectedMatch'] } })
      dispatch(actions.updateCache())
    }
  },
  updateCache: ()=>{
    return (dispatch, getState) => {
      setCache('match', getState().match)
      dispatch({ type: actionTypes.updateCache, payload: {} })
    }
  }
};


const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.setType:
      return { ...state, ...payload };

    default:
      return state;
  }
};


export default reducer;
