import React from 'react';
import EmployeeListItem from './EmployeeListItem';
import { EmployeeListContainer } from '../styles/HomePage.styles';

const EmployeeList = ({ employees, onSelect }) => (
  <EmployeeListContainer>
    {employees.map(employee => (
      <EmployeeListItem
        key={employee.id}
        employee={employee}
        onSelect={onSelect}
      />
    ))}
  </EmployeeListContainer>
);

export default EmployeeList;
