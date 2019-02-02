import React from 'react';
import {
  EmployeeItemContainer,
  EmployeeTitle,
  EmployeeName,
  EmployeeImage,
} from '../styles/HomePage.styles';

const EmployeeListItem = ({ employee, onSelect  }) => {
  const { firstName, lastName, title, pic, id } = employee;

  return (
    <EmployeeItemContainer onClick={() => onSelect(id)}>
      <EmployeeImage src={require(`images/${pic}`)} alt="img" />
      <div>
        <EmployeeName>{firstName} {lastName}</EmployeeName>
        <EmployeeTitle>{title}</EmployeeTitle>
      </div>
    </EmployeeItemContainer>
  );
};

export default EmployeeListItem;
