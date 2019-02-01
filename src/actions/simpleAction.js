import { GET_EMPLOYEE } from '../constants/actionTypes';

export const simpleAction = () => dispatch => {
  dispatch({
    type: GET_EMPLOYEE,
    payload: 'result_of_simple_action'
  })
};
