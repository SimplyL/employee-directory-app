import React from 'react';

import Header from './Header';
import EmployeeDetails from './EmployeeDetails';
import {
  EmployeePageContainer,
  Tabs,
  Tab,
  CloseButton,
  EmptyPlaceholder,
} from './styles/EmployeePage.styles';
import {
  HEADER_EMPLOYEE,
  LABEL_EMPTY_PLACEHOLDER
} from 'constants/text';

const EmployeePage = ({
  selectedEmployees,
  employee,
  onTabSwitch,
  onTabClose,
  onTitleChange,
}) => (
    <EmployeePageContainer>
      <Header title={HEADER_EMPLOYEE} />
      <Tabs>
        {
          !!selectedEmployees.length &&
          selectedEmployees.map(({ id, isDisplayed, firstName, lastName }) => (
            <Tab
              key={id}
              selected={isDisplayed}
              onClick={() => onTabSwitch(id)}
            >
              {`${firstName} ${lastName}`}
              <CloseButton onClick={(evt) => onTabClose(evt, id)} />
            </Tab>
          ))
        }
      </Tabs>
      {
        !!employee ?
          <EmployeeDetails employee={employee} onTitleChange={onTitleChange} /> :
          <EmptyPlaceholder>{LABEL_EMPTY_PLACEHOLDER}</EmptyPlaceholder>
      }
    </EmployeePageContainer>
  );

export default EmployeePage;
