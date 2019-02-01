import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';
import { AppContainer, MainArea } from './styles/App.styles';
import { simpleAction } from './actions/simpleAction';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  testAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    const { employees } = this.props;

    return (
      <AppContainer className="App">
        <MainArea>
          <HomePage employees={employees} />
          <EmployeePage />
        </MainArea>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
