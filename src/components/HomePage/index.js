import React, { Component } from 'react';

import EmployeeList from './EmployeeList';
import Header from './Header';
import SearchBar from './SearchBar';
import { HomePageContainer } from './styles/HomePage.styles';
import { HEADER_DIRECTORY } from 'constants/text';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: this.props.employees,
    }
  }

  handleSearch = (event) => {
    const { value } = event.target;
    const employees = this.props.employees.filter(({ firstName, lastName }) => {
      const fullName = `${firstName} ${lastName}`;
      return fullName.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ employees });
  }

  render() {
    const { employees } = this.state;
    const { onSelect } = this.props;

    return (
      <HomePageContainer>
        <Header title={HEADER_DIRECTORY} />
        <SearchBar onChange={this.handleSearch} />
        <EmployeeList employees={employees} onSelect={onSelect}/>
      </HomePageContainer>
    )
  }
};

export default HomePage;
