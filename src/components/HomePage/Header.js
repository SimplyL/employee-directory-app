import React from 'react';
import { HomePageHeader } from './styles/HomePage.styles';

const Header = ({ title }) => (
  <HomePageHeader>
    {title}
  </HomePageHeader>
);

export default Header;
