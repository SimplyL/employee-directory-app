import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import employees from './constants/employeeData';
import configureStore from './store';
import App from './App';

const inistialState = {
  employees
}

ReactDOM.render(
  <Provider store={configureStore(inistialState)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
