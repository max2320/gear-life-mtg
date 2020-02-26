import { validators } from '../lib/validators';

const initialState = {
  playerSetup: false,
  teamSetup: false,
  allowStart: false
};

export const actionTypes = {
  validatePlayers: 'control/VALIDATE_PLAYERS',
  validateTeams: 'control/VALIDATE_TEAMS',
};

export const actions = {
  validateAll: () => {
    return (dispatch) => {
      dispatch(actions.validatePlayers());
      dispatch(actions.validateTeams());
    }
  },
  validatePlayers: () => {
    return (dispatch, getState) => {
      const {
        control: { teamSetup },
        player: { players }
      } = getState();
      const playerList = Object.values(players);

      const playerSetup = playerList.reduce((acc, { colors, name }) => {
        return acc &&
               validators.colors(colors) &&
               validators.name(name);
      }, true);

      const payload = {
        playerSetup,
        allowStart: teamSetup && playerSetup
      };

      dispatch({ type: actionTypes.validatePlayers, payload });
    }
  },
  validateTeams: () => {
    return (dispatch, getState) => {
      const {
        control: { playerSetup },
        team: { teams },
        player: { players }
      } = getState();
      const teamList = Object.values(teams);
      const playerList = Object.values(players);

      const teamNames = teamList.reduce((acc, { name }) => {
        return acc && validators.name(name);
      }, true);

      const teamSetup = teamNames && validators.teamsSizes(teamList, playerList);

      const payload = {
        teamSetup,
        allowStart: teamSetup && playerSetup
      };

      dispatch({ type: actionTypes.validatePlayers, payload });
    }
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.validatePlayers:
    case actionTypes.validateTeams:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default reducer;
