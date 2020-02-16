import {setCache, getCache} from '../lib/local_cache';

const defaultState = {
  currentMatch: 0,
  teams: {},
  history: []
}

const initialState = getCache('scoreBoard') || { ...defaultState };

export const actionTypes = {
  startMatch: 'scoreBoard/START_MATCH',
  resetMatch: 'scoreBoard/RESET_MATCH',
  registryAction: 'scoreBoard/REGISTRY_ACTION',
  registryRoundWinners: 'scoreBoard/REGISTRY_ROUND_WINNERS',
  logHistory: 'scoreBoard/LOG_HISTORY',
  updateCache: 'scoreBoard/UPDATE_CACHE',
};

export const actions = {
  startMatch: () => {
    return async (dispatch, getState) => {
      const {
        player: { players },
        team: { teams },
        match: { matchConfig },
        scoreBoard
      } = getState();

      if(Object.keys(scoreBoard.teams) > 0){
        await dispatch(actions.resetMatch());
      }

      const teamIds = [...new Set(Object.values(players).map(({teamId}) => teamId)) ]

      const newTeams = teamIds.map((teamId) => teams[teamId]).reduce((cur, team)=>{
        return {
          ...cur,
          [team.id]: {
            id: team.id,
            currentScore: {
              life: matchConfig.life,
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
  resetMatch: () => {
    return (dispatch, getState) => {
      // TODO archive current match

      const payload = {
        currentMatch: 0,
        teams: {},
        history: []
      }

      dispatch({ type: actionTypes.resetMatch, payload })
      dispatch(actions.updateCache())
    }
  },
  registryAction: (actionObject) => {
    return (dispatch, getState) => {
      const { scoreBoard: { teams } } = getState();
      const { action, teamId, value } = actionObject;

      const targetTeam = teams[teamId];
      const { currentScore } = targetTeam;

      const targetScore = currentScore[action] + value;

      const payload = {
        teams: {
          ...teams,
          [teamId]: {
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
  registryRoundWinners: (teamIds) => {
    return (dispatch, getState) => {
      const {
        match: { matchConfig },
        scoreBoard: { currentMatch, teams },
      } = getState();

      const newScoreBoard = Object.values(teams).reduce((acc, { wins, id })=>{
        if(teamIds.includes(id)){
          wins++;
        }

        return {
          ...acc,
          [id]: {
            id,
            currentScore: {
              life: matchConfig.life,
              poison: 0,
            },
            wins
          }
        };
      }, {});

      const payload = {
        teams: { ...newScoreBoard }
      };

      dispatch({ type: actionTypes.registryRoundWinners, payload });
      dispatch(actions.logHistory({
        match: currentMatch,
        action: 'roundWinners',
        teamIds: teamIds
      }));
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
    case actionTypes.registryRoundWinners:
    case actionTypes.logHistory:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default reducer;
