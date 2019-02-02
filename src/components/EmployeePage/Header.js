import React from 'react';
import { EmployeePageHeader } from './styles/EmployeePage.styles';

const Header = ({ title }) => (
  <EmployeePageHeader>
    {title}
  </EmployeePageHeader>
);

export default Header;
