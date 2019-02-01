import React from 'react';
import EmployeeListItem from './EmployeeListItem';

const renderEmployee = employee => (
  <EmployeeListItem key={employee.id} employee={employee} />
);

const EmployeeList = ({ employees }) => (
  <div>
    {employees.map(renderEmployee)}
  </div>
);

export default EmployeeList;
