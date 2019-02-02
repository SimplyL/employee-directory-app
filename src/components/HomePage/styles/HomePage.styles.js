import styled from 'styled-components';

const HomePageContainer = styled.div`
  grid-column: 1;
  display: grid;
  border-right: 1px solid #cccccc;
  padding: 10px;
  grid-template-rows: auto auto 1fr;
`;

const HomePageHeader = styled.h3`
  justify-self: center;
`;

const EmployeeListContainer = styled.div`
  margin-top: 10px;
`;

const EmployeeItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 15px;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const EmployeeTitle = styled.div`
  color: #888;
`;

const EmployeeName = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const EmployeeImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const SearchInput = styled.input`
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  &:focus {
    border: 1px solid #3366ff;
  }
`;

export {
  HomePageContainer,
  HomePageHeader,
  EmployeeItemContainer,
  EmployeeListContainer,
  EmployeeTitle,
  EmployeeName,
  EmployeeImage,
  SearchInput,
};
