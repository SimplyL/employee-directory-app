import {
  SELECT_EMPLOYEE,
  SWITCH_TAB,
  CLOSE_TAB,
  CHANGE_TITLE,
} from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_EMPLOYEE: {
      const tabs = state.filter(employee => employee.isSelected);
      if (tabs.length === 2) return state;

      const employees = state.map(employee => {
        if (employee.isDisplayed) {
          employee.isDisplayed = false;
        }
        if (employee.id === action.payload) {
          employee.isSelected = true;
          employee.isDisplayed = true;
        }
        return employee;
      });
      return employees;
    }

    case SWITCH_TAB: {
      const employees = state.map(employee => {
        employee.id === action.payload ? employee.isDisplayed = true : employee.isDisplayed = false;
        return employee;
      });
      return employees;
    }

    case CLOSE_TAB: {
      const employees = state.map(employee => {
        if (employee.id === action.payload) {
          employee.isSelected = false;
          employee.isDisplayed = false;
        }
        if(employee.isSelected) {
          employee.isDisplayed = true;
        }
        return employee;
      });

      return employees;
    }

    case CHANGE_TITLE : {
      const employees = state.map(employee => {
        if(employee.id === action.payload.id) {
          employee.title = action.payload.value;
        }
        return employee;
      })

      return employees;
    }

    default:
      return state
  }
};
