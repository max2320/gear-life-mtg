import uuid from '../lib/uuid';
import {setCache, getCache} from '../lib/local_cache';
import { actions as teamActions } from './team';

const defaultState = {
  order: [],
  players: {}
};
const initialState = getCache('player') || defaultState;

export const actionTypes = {
  createPlayer: 'player/CREATE',
  removePlayer: 'player/REMOVE',
  setPlayerColors: 'player/SET_PLAYER_COLORS',
  setPlayerName: 'player/SET_PLAYER_NAME',
  setPlayerTeam: 'player/SET_PLAYER_TEAM',
  reset: 'player/RESET',
  updateCache: 'player/UPDATE_CACHE'
};

export const actions = {
  createPlayer: (teamId = null) => {
    return (dispatch, getState) => {
      const { players, order } = getState().player;
      const { order: teamOrder } = getState().team;

      const name = `Player ${(order.length + 1)}`;

      if(typeof teamId !== 'string'){
        teamId = teamOrder[order.length] || dispatch(teamActions.createTeam());
      }

      const player = {
        id: uuid(name),
        colors: ['white', 'blue', 'black', 'red', 'green', 'colorless'],
        name,
        teamId
      };

      const payload = {
        order: [ ...order, player.id ],
        players: { ...players, [player.id]: player }
      };

      dispatch({ type: actionTypes.createPlayer, payload });
      dispatch(actions.updateCache());
    }
  },
  removePlayer: (playerId) => {
    return (dispatch, getState) => {
      let { players, order } = getState().player;

      delete players[playerId];
      order = order.filter(id => id !== playerId)

      const payload = { order, players };

      dispatch({ type: actionTypes.removePlayer, payload });
      dispatch(actions.updateCache());
    }
  },
  setPlayerColors: (playerId, color) => {
    return (dispatch, getState) => {
      let { players } = getState().player;
      const player = players[playerId];

      if(player.colors.includes(color)){
        player.colors = player.colors.filter((c)=>(c != color))
      }else{
        player.colors = [...player.colors, color].sort();
      }

      const payload = {
        players: {
          ...players,
          [playerId]: { ...player }
        }
      };

      dispatch({ type: actionTypes.setPlayerColors, payload });
      dispatch(actions.updateCache());
    }
  },
  setPlayerName: (playerId, name) => {
    return (dispatch, getState) => {
      let { players } = getState().player;

      const payload = {
        players: {
          ...players,
          [playerId]: {
            ...players[playerId],
            name
          }
        }
      };

      dispatch({ type: actionTypes.setPlayerName, payload });
      dispatch(actions.updateCache());
    }
  },
  setPlayerTeam: (playerId, teamId) => {
    return (dispatch, getState) => {
      let { players } = getState().player;

      const payload = {
        players: {
          ...players,
          [playerId]: {
            ...players[playerId],
            teamId
          }
        }
      };

      dispatch({ type: actionTypes.setPlayerName, payload });
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
      setCache('player', getState().player);
      dispatch({ type: actionTypes.updateCache, payload: {} });
    }
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.createPlayer:
    case actionTypes.removePlayer:
    case actionTypes.setPlayerColors:
    case actionTypes.setPlayerName:
    case actionTypes.setPlayerTeam:
      return { ...state, ...payload };

    case actionTypes.reset:
      return { ...defaultState };

    default:
      return state;
  }
};

export default reducer;
