import { GET_EMPLOYEE } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        result: action.payload
      }
    default:
      return state
  }
};
