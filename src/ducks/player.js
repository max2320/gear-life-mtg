import uuid from '../lib/uuid';
import {setCache, getCache} from '../lib/local_cache';

const initialState = getCache('player') || {
  order: [],
  players: {}
};

export const actionTypes = {
  createPlayer: 'player/CREATE',
  removePlayer: 'player/REMOVE',
  setPlayerColors: 'player/SET_PLAYER_COLORS',
  setPlayerName: 'player/SET_PLAYER_NAME',
  updateCache: 'player/UPDATE_CACHE'
};

export const actions = {
  createPlayer: () => {
    return (dispatch, getState) => {
      const { players, order } = getState().player;
      const playerName = `Player ${(order.length + 1)}`;
      const player = {
        id: uuid(playerName),
        name: playerName,
        colors: ['white', 'blue', 'black', 'red', 'green', 'colorless']
      };

      const payload = {
        order: [ ...order, player.id ],
        players: { ...players, [player.id]: player }
      };

      dispatch({ type: actionTypes.createPlayer, payload })
      dispatch(actions.updateCache())
    }
  },
  removePlayer: (playerId) => {
    return (dispatch, getState) => {
      let { players, order } = getState().player;

      delete players[playerId];
      order = order.filter(id => id !== playerId)

      const payload = { order, players };

      dispatch({ type: actionTypes.removePlayer, payload })
      dispatch(actions.updateCache())
    }
  },
  setPlayerColors: (playerId, colors) => {
    return (dispatch, getState) => {
      let { players } = getState().player;

      const payload = {
        players: {
          ...players,
          [playerId]: {
            ...players[playerId],
            colors
          }
        }
      };

      dispatch({ type: actionTypes.setPlayerColors, payload })
      dispatch(actions.updateCache())
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

      dispatch({ type: actionTypes.setPlayerName, payload })
      dispatch(actions.updateCache())
    }
  },
  updateCache: ()=>{
    return (dispatch, getState) => {
      setCache('player', getState().player)
      dispatch({ type: actionTypes.updateCache, payload: {} })
    }
  }
};


const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.createPlayer:
    case actionTypes.removePlayer:
    case actionTypes.setPlayerColors:
    case actionTypes.setPlayerName:
      return { ...state, ...payload };

    default:
      return state;
  }
};


export default reducer;
