import uuid from '../lib/uuid';
import {setCache, getCache} from '../lib/local_cache';
import { actions as controlActions } from './control';

const defaultState = {
  order: [],
  teams: {},
  length: 0
};
const initialState = getCache('team') || defaultState;

export const actionTypes = {
  createTeam: 'team/CREATE',
  removeTeam: 'team/REMOVE',
  setTeamName: 'team/SET_TEAM_NAME',
  reset: 'team/RESET',
  updateCache: 'team/UPDATE_CACHE'
};

export const actions = {
  createTeam: () => {
    return (dispatch, getState) => {
      const { teams, order, length } = getState().team

      const teamName = `Team ${(length + 1)}`;
      const team = {
        id: uuid(teamName),
        name: teamName
      };

      const payload = {
        order: [ ...order, team.id ],
        teams: { ...teams, [team.id]: team },
        length: length + 1
      };

      dispatch({ type: actionTypes.createTeam, payload });
      dispatch(actions.updateCache());

      return team.id;
    }
  },
  removeTeam: (teamId) => {
    return (dispatch, getState) => {
      let { teams, order } = getState().team

      delete teams[teamId];
      order = order.filter(id => id !== teamId)

      const payload = { order, teams };

      dispatch({ type: actionTypes.removeTeam, payload });
      dispatch(actions.updateCache());
    }
  },
  setTeamName: (teamId, name) => {
    return (dispatch, getState) => {
      let { teams } = getState().team;

      const payload = {
        teams:{
          ...teams,
          [teamId]: {
            ...teams[teamId],
            name
          }
        }
      };

      dispatch({ type: actionTypes.setTeamName, payload });
      dispatch(actions.updateCache());
    }
  },
  reset: () =>{
    return (dispatch, getState) => {
      dispatch({ type: actionTypes.reset, payload: {} });
      dispatch(actions.updateCache());
    }
  },
  updateCache: ()=>{
    return (dispatch, getState) => {
      dispatch(controlActions.validateAll());
      setCache('team', getState().team);
      dispatch({ type: actionTypes.updateCache, payload: {} });
    }
  }
};


const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.createTeam:
    case actionTypes.removeTeam:
    case actionTypes.setTeamName:
      return { ...state, ...payload };

    case actionTypes.reset:
      return { ...defaultState };

    default:
      return state;
  }
};

export default reducer;
