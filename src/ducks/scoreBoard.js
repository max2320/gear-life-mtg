import uuid from '../lib/uuid';
import {setCache, getCache} from '../lib/local_cache';

const defaultTeamScoreBoard = {
  currentScore: null,
  wins: 0
};

const defaultState = {
  currentMatch: 0,
  teams: {},
  history: []
}

const initialState = getCache('scoreBoard') || { ...defaultState };

export const actionTypes = {
  startMatch: 'scoreBoard/START_MATCH',
  registryAction: 'scoreBoard/REGISTRY_ACTION',
  logHistory: 'scoreBoard/LOG_HISTORY',
  updateCache: 'scoreBoard/UPDATE_CACHE',
};

export const actions = {
  startMatch: () => {
    return (dispatch, getState) => {
      const { team: { teams }, match: { matchConfig } } = getState();

      const newTeams = Object.values(teams).reduce((cur, team)=>{
        return {
          ...cur,
          [team.id]: {
            currentScore: {
              life: matchConfig.defaultLife,
              poison: 0,
            },
            wins: 0
          }
        }
      }, {});

      const payload = {
        currentMatch: 0,
        history: [],
        teams: newTeams
      };

      dispatch({ type: actionTypes.startMatch, payload })
      dispatch(actions.updateCache())
    }
  },
  registryAction: (actionObject) => {
    return (dispatch, getState) => {
      const { scoreBoard: { teams } } = getState();
      const { match, action, teamId, value } = actionObject;

      const targetTeam = teams[teamId];
      const { currentScore } = targetTeam;
      console.log(targetTeam)
      const targetScore = currentScore[action] + value;
      console.log(action, currentScore[action], targetScore)

      const payload = {
        teams:{
          ...teams,
          [teamId]:{
            ...targetTeam,
            currentScore: {
              ...currentScore,
              [action]: targetScore
            }
          }
        }
      };

      dispatch({ type: actionTypes.registryAction, payload });
      dispatch(actions.logHistory(actionObject));
    }
  },
  logHistory:  (actionObject) => {
    return (dispatch, getState) => {
      const { scoreBoard: { history } } = getState();

      const payload = { history: [...history, actionObject ]};
      dispatch({ type: actionTypes.logHistory, payload });
    }
  },
  updateCache: ()=>{
    return (dispatch, getState) => {
      setCache('scoreBoard', getState().scoreBoard);
      dispatch({ type: actionTypes.updateCache, payload: {} });
    }
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.startMatch:
    case actionTypes.registryAction:
    case actionTypes.logHistory:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default reducer;
