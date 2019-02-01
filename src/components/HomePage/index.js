import React from 'react';

import EmployeeList from './EmployeeList';
import Header from './Header';
import { HEADER_TITLE } from './constants';
import { HomePageContainer } from './styles/HomePage.styles';

const HomePage = ({ employees }) => (
  <HomePageContainer>
    <Header title={HEADER_TITLE} />
    <EmployeeList employees={employees} />
  </HomePageContainer>
);

export default HomePage;
