import React from 'react';

const EmployeeListItem = ({ employee }) => (
  <div>
    {employee.firstName}
    {employee.lastName}
    <img src={`../../../../../public/images/Amy_Jones.jpg`} alt="img"/>
  </div>
);

export default EmployeeListItem;
