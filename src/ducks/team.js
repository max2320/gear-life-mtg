import uuid from '../lib/uuid';
import {setCache, getCache} from '../lib/local_cache';

const initialState = getCache('team') || {
  order: [],
  teams: {}
};

export const actionTypes = {
  createTeam: 'team/CREATE',
  removeTeam: 'team/REMOVE',
  setTeamName: 'team/SET_TEAM_NAME',
  updateCache: 'team/UPDATE_CACHE'
};


export const actions = {
  createTeam: () => {
    return (dispatch, getState) => {
      const { teams, order } = getState().team
      const teamName = `Team ${(order.length + 1)}`;
      const team = {
        id: uuid(teamName),
        name: teamName
      };

      const payload = {
        order: [ ...order, team.id ],
        teams: { ...teams, [team.id]: team }
      }
      dispatch({ type: actionTypes.createTeam, payload })
      dispatch(actions.updateCache())
    }
  },
  removeTeam: (teamId) => {
    return (dispatch, getState) => {
      let { teams, order } = getState().team

      delete teams[teamId];
      order = order.filter(id => id !== teamId)

      const payload = { order, teams };

      dispatch({ type: actionTypes.createTeam, payload })
      dispatch(actions.updateCache())
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
      console.log(payload)

      dispatch({ type: actionTypes.setTeamName, payload })
      dispatch(actions.updateCache())
    }
  },
  updateCache: ()=>{
    return (dispatch, getState) => {
      setCache('team', getState().team)
      dispatch({ type: actionTypes.updateCache, payload: {} })
    }
  }
};


const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.createTeam:
    case actionTypes.removeTeam:
    case actionTypes.setTeamName:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default reducer;
