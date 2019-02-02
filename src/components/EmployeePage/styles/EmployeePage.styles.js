import styled from 'styled-components';
import { MdCancel } from "react-icons/md";
import { FaRegEdit } from 'react-icons/fa';

const EmployeePageContainer = styled.div`
  grid-column: 2;
  padding: 10px 10px 20px 10px;
  grid-template-rows: auto auto 1fr;
  display: grid;
`;

const EmployeePageHeader = styled.h3`
  justify-self: center;
`;

const EmployeeDetailsContainer = styled.div`
  border: 1px solid #cccccc;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const EmployeeTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-column-gap: 30px;
  padding: 10px 10px 10px 20px;
  align-items: center;
  border-bottom: 1px solid #cccccc;
`;

const EmployeeTitle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 20px;
  font-size: 16px;
  color: #888;
  height: 30px;
  align-items: center;
  padding: 10px 0 10px 0;
`;

const EmployeeName = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

const EmployeeImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const EmployeeInfoContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #cccccc;
`
const InfoText = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

const ContactLink = styled.a`
  color: #888;
`;

const Tabs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Tab = styled.div`
  padding: 10px;
  border: 1px solid #cccccc;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #d9d9d9;
  border-bottom: none;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  &:hover {
    background-color: #cccccc;
  }
  ${({ selected }) => !!selected && `
    background-color: transparent;
    cursor: default;
    &:hover {
      background-color: transparent;
    }
  `}
`;

const CloseButton = styled(MdCancel)`
  cursor: pointer;
  justify-self: end;
  font-size: 20px;
  color: #888;
  &:hover {
    color: #333;
  }
`;

const EditButton = styled(FaRegEdit)`
  cursor: pointer;
  font-size: 20px;
  color: #888;
  &:hover {
    color: #333;
  }
`;

const EditInput = styled.input`
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  &:focus {
    border: 1px solid #3366ff;
  }
`;

const EmptyPlaceholder = styled.div`
  align-self: center;
  justify-self: center;
`;

export {
  EmployeePageContainer,
  EmployeePageHeader,
  EmployeeDetailsContainer,
  EmployeeTitleContainer,
  EmployeeTitle,
  EmployeeName,
  EmployeeImage,
  EmployeeInfoContainer,
  ContactLink,
  InfoText,
  Tabs,
  Tab,
  CloseButton,
  EmptyPlaceholder,
  EditButton,
  EditInput,
};
