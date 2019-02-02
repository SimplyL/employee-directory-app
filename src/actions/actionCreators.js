import { SELECT_EMPLOYEE, SWITCH_TAB, CLOSE_TAB, CHANGE_TITLE } from './actionTypes';

export const selectEmployee = (id) => dispatch => {
  dispatch({
    type: SELECT_EMPLOYEE,
    payload: id,
  })
};

export const switchTab = (id) => dispatch => {
  dispatch({
    type: SWITCH_TAB,
    payload: id,
  })
};

export const closeTab = (id) => dispatch => {
  dispatch({
    type: CLOSE_TAB,
    payload: id,
  })
};

export const changeTitle = (id, value) => dispatch => {
  dispatch({
    type: CHANGE_TITLE,
    payload: {
      id,
      value,
    },
  })
};
