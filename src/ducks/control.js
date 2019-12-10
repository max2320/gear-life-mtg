import uuid from '../lib/uuid';
import {setCache, getCache} from '../lib/local_cache';

const initialState = getCache('control') || {
  editMode: true
};

export const actionTypes = {
  enableEdit: 'control/ENABLE_EDIT',
  disableEdit: 'control/DISABLE_EDIT',
  updateCache: 'control/UPDATE_CACHE'
};

export const actions = {
  enableEdit: () => {
    return (dispatch, getState) => {
      const payload = { editMode: true };

      dispatch({ type: actionTypes.enableEdit, payload })
      dispatch(actions.updateCache())
    }
  },
  disableEdit: () => {
    return (dispatch, getState) => {
      const payload = { editMode: false };

      dispatch({ type: actionTypes.disableEdit, payload })
      dispatch(actions.updateCache())
    }
  },
  updateCache: ()=>{
    return (dispatch, getState) => {
      setCache('control', getState().control)
      dispatch({ type: actionTypes.updateCache, payload: {} })
    }
  }
};


const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.enableEdit:
    case actionTypes.disableEdit:
      return { ...state, ...payload };

    default:
      return state;
  }
};


export default reducer;
