import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';
import { AppContainer, MainArea } from './styles/App.styles';
import {
  selectEmployee,
  switchTab,
  closeTab,
  changeTitle,
} from './actions/actionCreators';

class App extends Component {
  handleSelection = id => this.props.selectEmployee(id);

  handleTabSwitch = id => this.props.switchTab(id);

  handleTabClose = (evt, id) => {
    evt.stopPropagation();
    this.props.closeTab(id);
  }

  handleTitleChange = (id, value) => this.props.changeTitle(id, value);

  getSelected = () => {
    const { employees } = this.props;
    return employees.find(employee => employee.isSelected && employee.isDisplayed);
  }

  getCurrentTabs = () => {
    const { employees } = this.props;
    return employees.filter(employee => employee.isSelected);
  }

  render() {
    const { employees } = this.props;

    return (
      <AppContainer className="App">
        <MainArea>
          <HomePage employees={employees} onSelect={this.handleSelection} />
          <EmployeePage
            selectedEmployees={this.getCurrentTabs()}
            employee={this.getSelected()}
            onTabSwitch={this.handleTabSwitch}
            onTabClose={this.handleTabClose}
            onTitleChange={this.handleTitleChange}
          />
        </MainArea>
      </AppContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps, {
  selectEmployee,
  switchTab,
  closeTab,
  changeTitle
})(App);
