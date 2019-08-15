import uuid from '../lib/uuid';

export const actionTypes = {
  createPlayer: 'player/CREATE',
  removePlayer: 'player/REMOVE',
  setPlayerColors: 'player/SET_PLAYER_COLORS',
  setPlayerName: 'player/SET_PLAYER_NAME'
};

const initialState = {
  players: {}
};

export const actions = {
  createPlayer: () => {
    return (dispatch, getState) => {
      const { players } = getState().players;
      const playerName = `Player ${(players.length + 1)}`;
      const player = {
        id: uuid(playerName),
        name: playerName,
        colors: ['white', 'blue', 'black', 'red', 'green', 'colorless']
      };

      const payload = {
        players: { ...players, [player.id]: player }
      };

      dispatch({ type: actionTypes.createPlayer, payload })
    }
  },
  removePlayer: (playerId) => {
    return (dispatch, getState) => {
      let { players } = getState().players;

      delete players[playerId];
      const payload = { players };

      dispatch({ type: actionTypes.createPlayer, payload })
    }
  },
  setPlayerColors: (playerId, colors) => {
    return (dispatch, getState) => {
      let { players } = getState().players;

      const payload = {
        ...players,
        [playerId]: {
          ...players[playerId],
          colors
        }
      };

      dispatch({ type: actionTypes.setPlayerColors, payload })
    }
  },
  setPlayerName: (playerId, name) => {
    return (dispatch, getState) => {
      let { players } = getState().players;

      const payload = {
        ...players,
        [playerId]: {
          ...players[playerId],
          name
        }
      };

      dispatch({ type: actionTypes.setPlayerName, payload })
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
