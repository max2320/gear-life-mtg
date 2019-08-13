const actionTypes = {
  createTeam: 'team/CREATE',
  removeTeam: 'team/REMOVE',
  addTeamMember: 'team/ADD_MEMBER',
  removeTeamMember: 'team/REMOVE_MEMBER',
};

const initialState = {
  teamOrder: [],
  teams: {}
};

const actions = {
  createTeam: (team) =>{
    return dispatch => {
      dispatch({
        type: actionTypes.createTeam,
        payload: team
      })
    }
  },
  removeTeam: () =>{
    return dispatch => {

    }
  },
  addTeamMember: () =>{
    return dispatch => {

    }
  },
  removeTeamMember: () =>{
    return dispatch => {

    }
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.createTeam:
      return {
        ...state
      };
    case actionTypes.removeTeam:
      return {
        ...state
      };
    case actionTypes.addTeamMember:
      return {
        ...state
      };
    case actionTypes.removeTeamMember:
      return {
        ...state
      };

    default:
      return state;
  }
};


export default reducer;
